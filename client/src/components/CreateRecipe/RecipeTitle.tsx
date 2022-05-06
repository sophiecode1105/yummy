import { useQuery } from "@apollo/client";

import { useSetRecoilState } from "recoil";
import { title } from "../../state/state";
import { Input, Label, Wrap } from "../../styled/create";
import { Get_Materials } from "../../graphql/query";

const RecipeTitle = () => {
  let { loading, data = { getAllMaterial: [] }, error } = useQuery(Get_Materials);
  const setTitle = useSetRecoilState(title);

  return (
    <Wrap>
      <Label>레시피 제목</Label>
      <Input
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        placeholder="예: 소고기 미역국 끓이기"
      />
    </Wrap>
  );
};

export default RecipeTitle;
