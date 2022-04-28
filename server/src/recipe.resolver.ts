import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { JwtService } from '@nestjs/jwt';
import { Recipes } from '@prisma/client';
import { PrismaService } from './prisma.service';

@Resolver()
export class RecipeResolver {
  constructor(
    private prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  @Query()
  async getAllRecipe(): Promise<Recipes[]> {
    try {
      return this.prisma.recipes.findMany({
        include: {
          likes: true,
          contents: true,
        },
      });
    } catch (err) {
      console.log(err);
    }
  }

  @Query()
  async getRecipe(
    @Args('id') id: number,
    @Context('token') token: string,
  ): Promise<Recipes> {
    try {
      return this.prisma.recipes.findUnique({
        where: { id },
        include: {
          user: true,
          likes: true,
          contents: true,
        },
      });
    } catch (err) {
      console.log(err);
    }
  }

  @Query()
  async searchRecipe(
    @Args('materialName') metarialName: string,
  ): Promise<Recipes[]> {
    try {
      const ex = await this.prisma.recipes.findMany({
        where: { materials: { search: metarialName } },
        include: {
          user: true,
          contents: true,
          likes: true,
        },
      });

      return ex;
    } catch (err) {
      console.log(err);
    }
  }

  @Mutation()
  async createRecipe(
    @Args('info') info: { title: string; materials: string },
    @Context('token') token: string,
  ): Promise<Recipes> {
    try {
      // console.log('진입');
      const { title, materials } = info;
      // console.log(token);
      const userInfo = this.jwtService.verify(token);
      // console.log(userInfo);
      return this.prisma.recipes.create({
        data: {
          title,
          materials,
          user: {
            connect: { id: userInfo.id },
          },
        },
        include: {
          user: true,
          contents: true,
          likes: true,
        },
      });
    } catch (err) {
      console.log(err);
    }
  }

  @Mutation()
  async updateRecipe(
    @Args('info') info: { id: number; title: string },
  ): Promise<Recipes> {
    try {
      const { id, title } = info;

      return this.prisma.recipes.update({
        where: { id },
        data: { title },
      });
    } catch (err) {
      console.log(err);
    }
  }

  @Mutation()
  async deleteRecipe(@Args('id') id: number): Promise<Boolean> {
    try {
      await this.prisma.recipes.delete({ where: { id } });
      await this.prisma.contents.deleteMany({ where: { recipeId: id } });
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  }
}
