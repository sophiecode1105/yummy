import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Recipes } from '@prisma/client';
import { PrismaService } from './prisma.service';

@Resolver()
export class RecipeResolver {
  constructor(private prisma: PrismaService) {}

  @Query()
  async getAllRecipe(): Promise<Recipes[]> {
    return this.prisma.recipes.findMany({
      include: {
        likes: true,
      },
    });
  }

  @Query()
  async getRecipe(@Args('id') id: number): Promise<Recipes> {
    return this.prisma.recipes.findUnique({
      where: { id },
      include: {
        user: true,
        likes: true,
      },
    });
  }

  @Mutation()
  async createRecipe(
    @Args('info') info: { title: string; userId: number },
  ): Promise<Recipes> {
    const { title, userId } = info;
    return this.prisma.recipes.create({
      data: {
        title,
        user: {
          connect: { id: userId },
        },
      },
      include: {
        user: true,
      },
    });
  }

  @Mutation()
  async updateRecipe(
    @Args('info') info: { id: number; title: string },
  ): Promise<Recipes> {
    const { id, title } = info;

    return this.prisma.recipes.update({
      where: { id },
      data: { title },
    });
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
