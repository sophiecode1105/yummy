import { useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import { material } from '../../utils/typeDefs';
import Tag from '../Recipe/Tag';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { allMaterials, title } from '../../state/state';
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
  let { loading, data = { getAllMaterial: [] }, error } = useQuery(Get_Materials);
  const setTitle = useSetRecoilState(title);

  return (
    <div>
      <div>RecipeTitle</div>
      <input
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        placeholder="제목을 입력하세요"
      ></input>
    </div>
  );
};

export default RecipeTitle;
