import { ButtonWrap, Container, Material, MaterialListContainer, RecipeButton } from '../styled/materialList';

const Search = () => {
  let arr = [];
  for (let i = 0; i <= 50; i++) {
    arr.push(`재료${i}`);
  }

  return (
    <Container>
      <MaterialListContainer>
        {arr.map((el) => {
          return <Material>{el}</Material>;
        })}
      </MaterialListContainer>
      <ButtonWrap to="/recipelist">
        <RecipeButton>Find Recipe</RecipeButton>
      </ButtonWrap>
    </Container>
  );
};
export default Search;
