import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Recipe } from '@prisma/client';
import { PrismaService } from './prisma.service';

@Resolver()
export class RecipeResolver {
  constructor(private prisma: PrismaService) {}

  @Query()
  async getAllRecipe(): Promise<Recipe[]> {
    return this.prisma.recipe.findMany({});
  }

  @Query()
  async getRecipe(@Args('id') id: number): Promise<Recipe> {
    return this.prisma.recipe.findUnique({
      where: { id },
      include: {
        user: true,
      },
    });
  }

  @Mutation()
  async createRecipe(
    @Args('info') info: { title: string; userId: number },
  ): Promise<Recipe> {
    const { title, userId } = info;
    return this.prisma.recipe.create({
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
  ): Promise<Recipe> {
    const { id, title } = info;

    return this.prisma.recipe.update({
      where: { id },
      data: { title },
    });
  }

  @Mutation()
  async deleteRecipe(@Args('id') id: number): Promise<Boolean> {
    try {
      await this.prisma.recipe.delete({ where: { id } });
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  }
}
