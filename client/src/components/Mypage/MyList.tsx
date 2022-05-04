import { useState } from "react";
import { TitleWrap, Title } from "../../styled/mypage";

const MyList = () => {
  const TitleList = ["Likes", "My Recipes"];
  const [focusedTitle, setFocusedTitle] = useState<string>("Likes");

  const clickEffect = (title: string) => {
    setFocusedTitle(title);
  };

  return (
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
  );
};

export default MyList;
