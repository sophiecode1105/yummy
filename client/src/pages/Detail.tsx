import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { recipe } from "../graphql/query";

const Detail = () => {
  const { id } = useParams();
  const {
    data = { getRecipe: {} },
    loading,
    error,
  } = useQuery(recipe, {
    variables: { id: Number(id) },
  });

  let { contents = [], materials = "", title = "", likes = [] } = data.getRecipe;

  return (
    <div>
      {contents.map((el: { explain: string; img: string }, idx: number) => {
        return (
          <div key={idx}>
            <img src={el.img} width="300px" />
            <div>{el.explain}</div>
          </div>
        );
      })}
    </div>
  );
};
export default Detail;
