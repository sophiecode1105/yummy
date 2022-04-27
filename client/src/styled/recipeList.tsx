import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Title = styled.h1`
  text-align: center;
  margin-top: 5px;
  font-size: 20px;
  width: 18rem;
`;

export const TagsContainer = styled.div`
  margin: 2rem auto;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  min-height: 48px;
  width: 500px;
  padding: 0 8px;
  /* border: 1px solid rgb(214, 216, 218); */
  background-color: rgb(236, 236, 236);
  border-radius: 6px;
  &:focus-within {
    border: 2px solid rgb(245, 132, 11);
  }
  @media (max-width: 768px) {
    width: 360px;
  }
`;

export const TagWrap = styled.ul`
  display: flex;
  padding: 0;
  margin: 8px 0 0 0;
  flex-wrap: wrap; //꼭필요한 요소. Tag가 많아지면 바깥으로 넘어가지않고 다음 줄로 내려가게 해주는 요소다.
`;

export const TagList = styled.li`
  width: auto;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  padding: 0 8px;
  font-size: 14px;
  list-style: none;
  border-radius: 6px;
  margin: 0 8px 8px 0;
  background-color: rgb(132, 173, 51);
`;

export const TagInput = styled.input`
  flex: 1;
  border: none;
  background-color: transparent;
  height: 46px;
  font-size: 14px;
  padding: 4px 0 0 0;
  :focus {
    outline: transparent;
  }
`;

export const TagTitle = styled.span``;

export const Icon = styled.i`
  width: 16px;
  height: 16px;
  line-height: 16px;
  text-align: center;
  font-size: 14px;
  margin-left: 8px;
  color: rgb(132, 173, 51);
  border-radius: 50%;
  background: #fff;
  cursor: pointer;
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin: 10px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HatImg = styled.img`
  width: 8rem;
`;

export const KnifeImg = styled.img`
  width: 3.5rem;
  position: absolute;
  top: 0;
  right: 10%;
`;

export const TitleWrapper = styled.div`
  position: relative;
`;

export const FoodsWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 700px;
  background-color: rgba(0, 0, 0, 0.05);
  @media (max-width: 768px) {
    width: 360px;
  }
`;

export const FoodList = styled(Link)`
  display: flex;
  justify-content: center;
  width: 95%;
  margin: 10px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0px 1px 7px 0px rgba(0, 0, 0, 0.3);
  text-decoration: none;
`;

export const FoodImg = styled.img`
  height: 200px;
  width: 40%;
  object-fit: cover;
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin: 2px;
  border-radius: 5px;
  @media (max-width: 768px) {
    height: 150px;
  }
`;

export const Desc = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
`;

export const FoodDesc = styled.div`
  width: 98%;
  margin: 15px auto 0px auto;
  height: 65%;
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
`;

export const FoodName = styled.h1`
  width: auto;
  font-size: 25px;
  margin: 5px;
  color: black;
`;

export const FoodMaterials = styled.div`
  width: auto;
  font-size: 20px;
  margin: 10px 5px;
  color: rgba(0, 0, 0, 0.8);
`;

export const SubDesc = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 35%;
  padding: 10px;
`;

export const UserDesc = styled.div`
  display: flex;
  justify-content: centers;
  align-items: center;
`;

export const UserAvatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

export const UserNickname = styled.div`
  margin: 0px 10px;
  color: rgba(0, 0, 0, 0.8);
`;

export const LikeWrap = styled.div`
  width: auto;
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  margin: 5px;
  background-color: rgb(245, 245, 245);
  padding: 10px;
  border-radius: 20px;
  color: black;
`;

export const LikeCount = styled.div`
  font-size: 15px;
  margin-left: 10px;
`;
