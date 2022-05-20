import { materialList } from '../state/state';
import { Container, HatImg, Title, KnifeImg, TitleWrapper } from '../styled/recipeList';
import Tag from '../components/Recipe/Tag';
import chefHat from '../assets/chefHat.png';
import kitchenKinfe from '../assets/kitchenKnife.png';
import Food from '../components/Recipe/Food';
import { useLazyQuery, useMutation } from '@apollo/client';
import { useRecoilValue } from 'recoil';
import { useEffect, useState } from 'react';
import { Get_FoodList, postLike } from '../graphql/query';

const HTML: any = document.querySelector('html');
const RecipeList = () => {
  const searchMaterails = useRecoilValue(materialList);
  const [page, setPage] = useState(0);
  const [list, setList] = useState<any>([]);
  let [
    getList,
    {
      loading,
      data = { searchRecipe: { recipeList: [], userInfo: {} } }, //data가 undefined => 이후에 채워짐 , type을 맞추고 undefined일때 타입을 맞추기위한 처리
      error,
      refetch,
    },
  ] = useLazyQuery(Get_FoodList, {
    variables: { materialName: searchMaterails, page },
  });

  const [like] = useMutation(postLike);

  const infiniteScroll = () => {
    const currentScrollTop = HTML?.scrollTop; // 현재 스크롤 위치
    const windowInner = window.innerHeight; // 브라우저의 스크롤 높이
    const fullHeight = HTML?.scrollHeight; // HTML의 높이
    if (currentScrollTop + windowInner >= fullHeight) {
      console.log(page);
      setPage((prev) => prev + 1);
    }
  };

  const getData = async () => {
    const { data } = await getList();
    setList([...list, ...data.searchRecipe.recipeList]);
  };

  useEffect(() => {
    console.log('유즈이펙트');
    getData();
    window.addEventListener('scroll', infiniteScroll);
    return () => {
      window.removeEventListener('scroll', infiniteScroll);
    };
  }, [page, searchMaterails]);

  console.log(list);

  return (
    <Container>
      <HatImg src={chefHat} />
      <TitleWrapper>
        <Title>내가 선택한 재료 </Title>
        <KnifeImg src={kitchenKinfe} />
      </TitleWrapper>
      <Tag />
      {list.map((el: {}, i: string) => {
        return <Food like={like} refetch={refetch} info={data.searchRecipe.userInfo} desc={el} key={i} />;
      })}
    </Container>
  );
};

export default RecipeList;
