/*
  Warnings:

  - You are about to drop the column `metarialId` on the `Uses` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `Metarials` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `metarialName` to the `Uses` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Uses" DROP CONSTRAINT "Uses_metarialId_fkey";

-- AlterTable
ALTER TABLE "Uses" DROP COLUMN "metarialId",
ADD COLUMN     "metarialName" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Metarials_name_key" ON "Metarials"("name");

-- AddForeignKey
ALTER TABLE "Uses" ADD CONSTRAINT "Uses_metarialName_fkey" FOREIGN KEY ("metarialName") REFERENCES "Metarials"("name") ON DELETE CASCADE ON UPDATE CASCADE;
