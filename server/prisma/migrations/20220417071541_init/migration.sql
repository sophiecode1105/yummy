/*
  Warnings:

  - You are about to drop the `Metarials` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Uses` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `metarials` to the `Recipes` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Uses" DROP CONSTRAINT "Uses_metarialName_fkey";

-- DropForeignKey
ALTER TABLE "Uses" DROP CONSTRAINT "Uses_recipeId_fkey";

-- AlterTable
ALTER TABLE "Recipes" ADD COLUMN     "metarials" TEXT NOT NULL;

-- DropTable
DROP TABLE "Metarials";

-- DropTable
DROP TABLE "Uses";
