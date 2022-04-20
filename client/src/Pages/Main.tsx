import styled from "styled-components";

import { gql, useQuery } from "@apollo/client";
const Get_Recipes = gql`
  query {
    getRecipeContent(recipeId: 1) {
      img
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
        : data.getRecipeContent.map((el: any, idx: any) => {
            return <img src={el.img} key={idx} />;
          })}
    </div>
  );
};
