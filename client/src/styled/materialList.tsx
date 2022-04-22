import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1400px;
  margin: 10px auto;
`;

export const MaterialListContainer = styled.div`
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: 250px;
  width: 100%;
  display: grid;
  grid-gap: 20px;
`;

export const Material = styled.div`
  width: 100%;
  background-color: powderblue;
`;

export const ButtonWrap = styled(Link)`
  display: flex;
  justify-content: center;
  margin: 20px;
`;

export const RecipeButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 50px;
  background-color: rgb(65, 78, 182);
  color: #fff;
  font-size: 15px;
  border-radius: 5px;
  cursor: pointer;
`;
