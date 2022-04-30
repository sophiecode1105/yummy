import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { clickedProps } from '../utils/typeDefs';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ChoiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 2px solid rgb(132, 173, 51);
  width: 500px;
  margin: 30px auto;
  border-radius: 20px;
  @media (max-width: 768px) {
    width: 350px;
  }
`;

export const ListWrap = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0;
  padding: 10px;
`;

export const SelectContent = styled.div`
  margin: 0px 10px 15px 10px;
`;

export const List = styled.li<clickedProps>`
  width: auto;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  padding: 0 8px;
  font-size: 14px;
  list-style: none;
  border: 1px solid black;
  background-color: ${(props) => (props.clicked ? 'rgb(178, 219, 95);' : '#fff')};
  border-radius: 6px;
  margin: 0 8px 8px 0;
  cursor: pointer;
  &:hover {
    background-color: rgb(178, 219, 95);
  }
`;

export const Wrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  border: 1px solid red;
  padding: 30px;
`;

export const Label = styled.label`
  margin-right: 20px;
`;

export const Input = styled.input`
  width: 300px;
  padding: 10px;
  font-size: 15px;
  border: none;
  background-color: rgb(250, 242, 235);

  &:focus {
    outline-color: rgb(245, 132, 11);
  }
`;
