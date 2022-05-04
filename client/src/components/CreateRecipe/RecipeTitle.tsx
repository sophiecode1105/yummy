import { gql, useQuery } from "@apollo/client";
import { useSetRecoilState } from "recoil";
import { title } from "../../state/state";
import { Input, Label, Wrap } from "../../styled/create";
import { Get_Materials } from "../../utils/api";

const RecipeTitle = () => {
  //바뀔때 다시 받고싶으면? refetch라는 기능을 쓰면 된다.
  let { loading, data = { getAllMaterial: [] }, error, refetch } = useQuery(Get_Materials);
  const setTitle = useSetRecoilState(title);

  return (
    <Wrap>
      <Label>레시피 제목</Label>
      <Input
        onChange={(e) => {
          //refetch() 원할때 뽑아먹을수있는기능
          setTitle(e.target.value);
        }}
        placeholder="예: 소고기 미역국 끓이기"
      />
    </Wrap>
  );
};

export default RecipeTitle;
