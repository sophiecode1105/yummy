import { materialList } from '../state/state';
import { Container, FoodImg, HatImg, Title, KnifeImg, TitleWrapper } from '../styled/recipeList';
import Tag from '../components/Recipe/Tag';
import chefHat from '../assets/chefHat.png';
import kitchenKinfe from '../assets/kitchenKnife.png';
import Food from '../components/Recipe/Food';
import { gql, useQuery } from '@apollo/client';
import { useRecoilValue } from 'recoil';

const Get_FoodList = gql`
  query ($materialName: String!) {
    searchRecipe(materialName: $materialName) {
      id
      title
      materials
      likes {
        userId
      }
      user {
        nickName
        img
      }
      contents {
        img
      }
    }
  }
`;

const RecipeList = () => {
  const searchMaterails = useRecoilValue(materialList);
  let {
    loading,
    data = { searchRecipe: [] }, //data가 undefined => 이후에 채워짐 , type을 맞추고 undefined일때 타입을 맞추기위한 처리
    error,
  } = useQuery(Get_FoodList, { variables: { materialName: searchMaterails } });

  console.log('data', data);

  return (
    <Container>
      <HatImg src={chefHat} />
      <TitleWrapper>
        <Title>내가 선택한 재료</Title>
        <KnifeImg src={kitchenKinfe} />
      </TitleWrapper>
      <Tag />
      {data.searchRecipe.map((el: {}, i: string) => {
        return <Food desc={el} key={i} />;
      })}
    </Container>
  );
};

export default RecipeList;
