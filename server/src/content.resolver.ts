import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Content } from '@prisma/client';
import { PrismaService } from './prisma.service';

@Resolver()
export class ContentResolver {
  constructor(private prisma: PrismaService) {}

  @Query()
  async getRecipeContent(
    @Args('recipeId') recipeId: number,
  ): Promise<Content[]> {
    return this.prisma.content.findMany({
      where: { recipeId },
    });
  }
}
