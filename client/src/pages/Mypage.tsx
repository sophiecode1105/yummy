import { useQuery } from "@apollo/client";
import { getUser } from "../graphql/query";

const Mypage = () => {
  const { loading, data, error } = useQuery(getUser);

  console.log(error?.message);

  return <div>Mypage</div>;
};

export default Mypage;
