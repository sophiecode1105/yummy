import {
  Desc,
  FoodDesc,
  FoodImg,
  FoodList,
  FoodMaterials,
  FoodName,
  FoodsWrap,
  LikeCount,
  LikeWrap,
  SubDesc,
  UserAvatar,
  UserDesc,
  UserNickname,
} from '../../styled/recipeList';
import UndefinedImg from '../../assets/noImg.png';
import { useState } from 'react';

const Food = ({ desc }: any) => {
  let { id = 0, contents = [], likes = [], title = '', user = {}, materials = '' } = desc;
  const [isHeartPressed, setIsHeartPressed] = useState(false);

  return (
    <FoodsWrap>
      <FoodList to={String(id)}>
        <FoodImg src={contents[0] ? contents[0]?.img : UndefinedImg} />
        <Desc>
          <FoodDesc>
            <FoodName>{title}</FoodName>
            <FoodMaterials>{materials}</FoodMaterials>
          </FoodDesc>
          <SubDesc>
            <UserDesc>
              <UserAvatar src={UndefinedImg} />
              <UserNickname>{user.nickName}</UserNickname>
            </UserDesc>
            <LikeWrap>
              {isHeartPressed ? <i className="fas fa-heart" /> : <i className="far fa-heart" />}
              <LikeCount>100</LikeCount>
            </LikeWrap>
          </SubDesc>
        </Desc>
      </FoodList>
    </FoodsWrap>
  );
};

export default Food;
