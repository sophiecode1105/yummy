import styled from "styled-components";

import { gql, useQuery } from "@apollo/client";
const Get_Recipes = gql`
  query {
    getAllRecipe {
      title
    }
  }
`;

const Button = styled.button``;

export const Main = () => {
  const { loading, data, error } = useQuery(Get_Recipes);
  console.log(loading, data);
  return (
    <div>
      Main
      <Button>ddd</Button>
      {!data
        ? "로딩중"
        : data.getAllRecipe.map((el: any, idx: any) => {
            return <div key={idx}>{el.title}</div>;
          })}
    </div>
  );
};
