// import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
// import { Uses } from '@prisma/client';
// import { PrismaService } from './prisma.service';

// @Resolver()
// export class UseResolver {
//   constructor(private prisma: PrismaService) {}

//   @Query()
//   async getAllUse(): Promise<Uses[]> {
//     return this.prisma.uses.findMany({
//       include: { recipe: true, metarial: true },
//     });
//   }

//   @Mutation()
//   async createUse(
//     @Args('recipeId') recipeId: number,
//     @Args('metarialId') metarialId: [number],
//   ): Promise<Uses[]> {
//     let metarials = [];
//     for (let metarial of metarialId) {
//       metarials.push(
//         await this.prisma.uses.create({
//           data: {
//             metarial: {
//               connect: {
//                 id: metarial,
//               },
//             },
//             recipe: {
//               connect: {
//                 id: recipeId,
//               },
//             },
//           },
//         }),
//       );
//     }

//     return metarials;
//   }

//   @Mutation()
//   async updateUse(
//     @Args('recipeId') recipeId: number,
//     @Args('metarialId') metarialId: [number],
//   ): Promise<Uses[]> {
//     await this.prisma.uses.deleteMany({ where: { recipeId } });
//     let metarials = [];
//     for (let metarial of metarialId) {
//       metarials.push(
//         await this.prisma.uses.create({
//           data: {
//             metarial: {
//               connect: {
//                 id: metarial,
//               },
//             },
//             recipe: {
//               connect: {
//                 id: recipeId,
//               },
//             },
//           },
//         }),
//       );
//     }

//     return metarials;
//   }
// }
