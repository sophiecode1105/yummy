-- CreateTable
CREATE TABLE "Uses" (
    "id" SERIAL NOT NULL,
    "recipeId" INTEGER NOT NULL,
    "metarialId" INTEGER NOT NULL,

    CONSTRAINT "Uses_pkey" PRIMARY KEY ("id")
);
