import { materialList } from '../state/state';
import { Container, FoodImg, HatImg, Title } from '../styled/recipeList';
import Tag from '../Components/Recipe/Tag';
import chefHat from '../assets/chefHat.png';
import Food from '../Components/Recipe/Food';

const RecipeList = () => {
  return (
    <Container>
      <HatImg src={chefHat} />
      <Title>내가 선택한 재료</Title>
      <Tag />
      <Food />
    </Container>
  );
};

export default RecipeList;
