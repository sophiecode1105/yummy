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

  @Mutation()
  async createRecipe(@Args('info') info: Recipe): Promise<Recipe> {
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
}
