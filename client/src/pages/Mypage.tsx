import { useQuery } from "@apollo/client";
import MyList from "../components/Mypage/MyList";
import Profile from "../components/Mypage/Profile";
import { getUser } from "../utils/api";

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
