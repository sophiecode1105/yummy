import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Metarial } from '@prisma/client';
import { PrismaService } from './prisma.service';

@Resolver()
export class MetarialResolver {
  constructor(private prisma: PrismaService) {}

  @Query()
  async getAllMetarial() {
    return this.prisma.metarial.findMany({});
  }

  @Mutation()
  async createMetarial(@Args('info') info: Metarial): Promise<Metarial> {
    return this.prisma.metarial.create({ data: info });
  }
  @Mutation()
  async updateMetarial(@Args('info') info: Metarial): Promise<Metarial> {
    return this.prisma.metarial.update({
      where: { id: info.id },
      data: info,
    });
  }
}
