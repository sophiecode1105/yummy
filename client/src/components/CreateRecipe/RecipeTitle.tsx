import { useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import { material } from '../../utils/typeDefs';
import Tag from '../Recipe/Tag';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { allMaterials, title } from '../../state/state';
import { Input, Label, Wrap } from '../../styled/create';
const Get_Materials = gql`
  query {
    getAllMaterial {
      id
      name
      img
    }
  }
`;

const RecipeTitle = () => {
  //바뀔때 다시 받고싶으면? refetch라는 기능을 쓰면 된다.
  let { loading, data = { getAllMaterial: [] }, error, refetch } = useQuery(Get_Materials);
  const setTitle = useSetRecoilState(title);

  return (
    <Wrap>
      <Label>레시피 제목</Label>
      <Input
        onChange={(e) => {
          //refetch() 원할때 뽑아먹을수있는기능
          setTitle(e.target.value);
        }}
        placeholder="예: 소고기 미역국 끓이기"
      />
    </Wrap>
  );
};

export default RecipeTitle;
