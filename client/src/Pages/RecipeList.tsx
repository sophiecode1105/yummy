import { materialList } from '../state/state';
import { Container, FoodImg, Recipe, Title } from '../styled/recipeList';
import Tag from '../Components/Recipe/Tag';

const RecipeList = () => {
  return (
    <Container>
      <Title>내가 선택한 재료</Title>
      <Tag />

      <Recipe>레시피</Recipe>
    </Container>
  );
};

export default RecipeList;
