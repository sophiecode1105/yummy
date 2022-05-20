import { useEffect } from 'react';
import { useState } from 'react';
import { TitleWrap, Title } from '../../styled/mypage';
import Food from '../Recipe/Food';

const MyList = ({ list, refetch }: { list: { likes: []; recipes: [] }; refetch: any }) => {
  const TitleList = ['Likes', 'My Recipes'];
  const [focusedTitle, setFocusedTitle] = useState<string>('Likes');
  const [mylist, setMyList] = useState(list.likes);
  console.log('레시피1', list.recipes);

  useEffect(() => {
    setMyList(list.likes);
  }, [list]); //mylist로 하면 undefined로만 출력. 재랜더링이 안되는 버그

  const clickEffect = (title: string) => {
    setFocusedTitle(title);
  };

  useEffect(() => {
    if (focusedTitle === 'Likes') {
      setMyList(list.likes);
    } else {
      setMyList(list.recipes);
    }
  }, [focusedTitle]);

  console.log('마이리스트', mylist);

  return (
    <>
      <TitleWrap>
        {TitleList.map((title, i) => {
          return (
            <Title
              key={i}
              fontcolor={title === focusedTitle}
              onClick={() => {
                clickEffect(title);
              }}
            >
              {title}
            </Title>
          );
        })}
      </TitleWrap>
      {mylist.map((el,i)=>{
      return <Food  refetch={refetch} info={data.searchRecipe.userInfo} desc={el} key={i}  />
    })}
    </>
  );
};

export default MyList;
