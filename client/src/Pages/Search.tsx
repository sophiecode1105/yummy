import {
  ButtonWrap,
  Container,
  Material,
  MaterialListContainer,
  MaterialName,
  RecipeButton,
} from "../styled/materialList";

import { gql, useQuery } from "@apollo/client";
import { material } from "../state/typeDefs";

const Get_Materials = gql`
  query {
    getAllMaterial {
      id
      name
      img
    }
  }
`;

const Search = () => {
  let { loading, data, error } = useQuery(Get_Materials);

  return (
    <Container>
      <MaterialListContainer>
        {data?.getAllMaterial.map((el: material) => {
          let state = false;
          console.log(state);
          return (
            <MaterialName
              key={el.id}
              image={el.img}
              onClick={() => {
                console.log("클릭");
                state = !state;
              }}
              state={state}
            >
              {el.name}
            </MaterialName>
          );
        })}
      </MaterialListContainer>
      <ButtonWrap to="/recipelist">
        <RecipeButton>Find Recipe</RecipeButton>
      </ButtonWrap>
    </Container>
  );
};
export default Search;
