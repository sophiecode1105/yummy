import { useState } from 'react';
import Content from '../components/CreateRecipe/Content';
import { content } from '../utils/typeDefs';
import { gql, useMutation } from '@apollo/client';
import RecipeTitle from '../components/CreateRecipe/RecipeTitle';
import { useRecoilValue } from 'recoil';
import { materialList, title } from '../state/state';
import Tag from '../components/Recipe/Tag';
import Choice from '../components/CreateRecipe/Choice';
import { Container } from '../styled/create';

const postRecipe = gql`
  mutation ($info: createRecipe!) {
    createRecipe(info: $info) {
      id
      title
    }
  }
`;
const postContents = gql`
  mutation ($info: [inputContent]!, $recipeId: Int!) {
    createContent(info: $info, recipeId: $recipeId)
  }
`;

const CreateRecipe = () => {
  const [render, setRender] = useState(0);
  const recipeTitle = useRecoilValue(title);
  const material = useRecoilValue(materialList);
  const [prevImg] = useState<string[]>(['http://img.etoday.co.kr/pto_db/2020/11/20201124102548_1544383_710_340.jpg']);

  const [inputContents] = useState<content[]>([{ img: '', explain: '' }]);

  const [recipe] = useMutation(postRecipe);
  const [content] = useMutation(postContents);

  const complete = async () => {
    console.log(material.join(' & '));
    const { data: RecipeData = { createRecipe: {} } } = await recipe({
      variables: {
        info: { title: recipeTitle, materials: material.join(' & ') },
      },
    });

    console.log(RecipeData);
    console.log(inputContents);
    const { data: ContentsData = { createContent: {} } } = await content({
      variables: {
        info: inputContents,
        recipeId: RecipeData.createRecipe.id,
      },
    });

    console.log(ContentsData);
  };

  const add = () => {
    prevImg.push('http://img.etoday.co.kr/pto_db/2020/11/20201124102548_1544383_710_340.jpg');
    inputContents.push({ img: '', explain: '' });
    setRender(render + 1);
  };
  return (
    <Container>
      <Choice />
      <RecipeTitle />
      {prevImg.map((img: string, idx: number) => {
        return <Content key={idx} idx={idx} inputContents={inputContents} prevImg={prevImg} />;
      })}
      <button onClick={add}>Add</button>
      <button onClick={complete}>complete</button>
    </Container>
  );
};

export default CreateRecipe;
