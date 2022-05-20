import { useQuery } from '@apollo/client';
import MyList from '../components/Mypage/MyList';
import Profile from '../components/Mypage/Profile';
import { getUser } from '../graphql/query';

const Mypage = () => {
  const { loading, data = { getUser: {} }, error, refetch } = useQuery(getUser);
  // let { contents = [], materials = "", title = "", likes = [] } = data.getRecipe;

  return (
    <>
      <Profile userdata={data.getUser} />
      <MyList list={data.getUser} refetch={refetch} />
    </>
  );
};

export default Mypage;
