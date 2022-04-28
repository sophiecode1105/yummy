import { useState } from "react";
import Content from "../Components/CreateRecipe/Content";
import { content } from "../state/typeDefs";
import { gql, useMutation } from "@apollo/client";
import RecipeTitle from "../Components/CreateRecipe/RecipeTitle";
import { useRecoilValue } from "recoil";
import { materialList, title } from "../state/state";
import Tag from "../Components/Recipe/Tag";

const postRecipe = gql`
  mutation ($info: createRecipe!) {
    createRecipe(info: $info) {
      id
      title
    }
  }
`;
const CreateRecipe = () => {
  const [render, setRender] = useState(0);
  const recipeTitle = useRecoilValue(title);
  const material = useRecoilValue(materialList);
  const [prevImg] = useState<string[]>(["http://img.etoday.co.kr/pto_db/2020/11/20201124102548_1544383_710_340.jpg"]);

  const [inputContents] = useState<content[]>([{ img: "", explain: "" }]);

  const [recipe] = useMutation(postRecipe);

  const complete = async () => {
    const { data = {} } = await recipe({
      variables: {
        title: recipeTitle,
        material: material.join("&"),
      },
    });

    console.log(data);
  };

  const add = () => {
    console.log("DDD");
    prevImg.push("http://img.etoday.co.kr/pto_db/2020/11/20201124102548_1544383_710_340.jpg");
    inputContents.push({ img: "", explain: "" });
    setRender(render + 1);
  };
  return (
    <div>
      CreateRecipe
      <RecipeTitle />
      <Tag />
      {prevImg.map((img: string, idx: number) => {
        return <Content key={idx} idx={idx} inputContents={inputContents} prevImg={prevImg} />;
      })}
      <button onClick={add}>Add</button>
      <button onClick={complete}>complete</button>
    </div>
  );
};

export default CreateRecipe;
