import { gql, useQuery } from "@apollo/client";
import { useEffect } from "react";
import MyList from "../components/Mypage/MyList";
import Profile from "../components/Mypage/Profile";

const getUser = gql`
  query {
    getUser {
      email
      nickName
      img
      intro
      recipes {
        id
        title
      }
      likes {
        id
        recipe {
          title
        }
      }
    }
  }
`;

const Mypage = () => {
  const { loading, data = { getUser: {} }, error } = useQuery(getUser);
  // let { contents = [], materials = "", title = "", likes = [] } = data.getRecipe;

  return (
    <>
      <Profile userdata={data.getUser} />
      <MyList />
    </>
  );
};

export default Mypage;
