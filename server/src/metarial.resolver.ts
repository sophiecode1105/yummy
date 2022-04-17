// import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
// import { Metarials } from '@prisma/client';
// import { PrismaService } from './prisma.service';

// @Resolver()
// export class MetarialResolver {
//   constructor(private prisma: PrismaService) {}

//   @Query()
//   async getAllMetarial() {
//     return this.prisma.metarials.findMany({});
//   }

//   @Mutation()
//   async createMetarial(@Args('info') info: Metarials): Promise<Metarials> {
//     return this.prisma.metarials.create({ data: info });
//   }
//   @Mutation()
//   async updateMetarial(@Args('info') info: Metarials): Promise<Metarials> {
//     return this.prisma.metarials.update({
//       where: { id: info.id },
//       data: info,
//     });
//   }
// }
