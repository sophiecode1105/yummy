-- AddForeignKey
ALTER TABLE "Uses" ADD CONSTRAINT "Uses_recipeId_fkey" FOREIGN KEY ("recipeId") REFERENCES "Recipes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Uses" ADD CONSTRAINT "Uses_metarialId_fkey" FOREIGN KEY ("metarialId") REFERENCES "Metarials"("id") ON DELETE CASCADE ON UPDATE CASCADE;
