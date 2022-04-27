import styled from "styled-components";

import { gql, useQuery } from "@apollo/client";
const Get_Recipes = gql`
  query {
    getRecipe(id: 1) {
      title
    }
  }
`;

const Button = styled.button``;

const Main = () => {
  const { loading, data, error } = useQuery(Get_Recipes);
  console.log(loading, data);
  return (
    <div>
      Main
      <Button>ddd</Button>
    </div>
  );
};

export default Main;
