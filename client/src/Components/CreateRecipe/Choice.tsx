import { useRecoilValue } from 'recoil';
import { allMaterials } from '../../state/state';
import styled from 'styled-components';
import { useState } from 'react';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 2px solid rgb(132, 173, 51);
  width: 500px;
  margin: 0 auto;
  border-radius: 20px;
`;

export const ListWrap = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0;
  padding: 10px;
`;

type clickedProps = {
  clicked: boolean;
};

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

const Choice = () => {
  const [materials, setMaterials] = useState<string[]>([]);
  const getAllMaterails = useRecoilValue(allMaterials);
  console.log(materials);

  return (
    <Container>
      <ListWrap>
        {getAllMaterails.map((material, i) => {
          return (
            <List
              key={i}
              clicked={materials.includes(material)}
              onClick={() => {
                if (!materials.includes(material)) {
                  setMaterials([...materials, material]);
                } else {
                  setMaterials(
                    materials.filter((el) => {
                      return el !== material;
                    })
                  );
                }
              }}
            >
              {material}
            </List>
          );
        })}
      </ListWrap>
      <SelectContent>{`선택한재료: ${materials}`}</SelectContent>
    </Container>
  );
};

export default Choice;
