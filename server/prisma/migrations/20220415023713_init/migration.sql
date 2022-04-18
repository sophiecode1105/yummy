-- AddForeignKey
ALTER TABLE "likes" ADD CONSTRAINT "likes_recipeId_fkey" FOREIGN KEY ("recipeId") REFERENCES "Recipes"("id") ON DELETE CASCADE ON UPDATE CASCADE;
