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
  @Mutation()
  async createContent(@Args('info') info: Content[]): Promise<Number> {
    const ex = await this.prisma.content.createMany({ data: info });
    return ex.count;
  }
  @Mutation()
  async updateContent(@Args('info') info: Content[]): Promise<Number> {
    const { recipeId } = info[0];
    await this.prisma.content.deleteMany({ where: { recipeId } });
    const ex = await this.prisma.content.createMany({ data: info });
    return ex.count;
  }
}
