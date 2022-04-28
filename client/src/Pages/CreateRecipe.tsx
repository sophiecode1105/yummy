import { useState } from 'react';
import Content from '../Components/CreateRecipe/Content';
import { content } from '../state/typeDefs';

const CreateRecipe = () => {
  const [render, setRender] = useState(0);

  const [prevImg] = useState<string[]>(['http://img.etoday.co.kr/pto_db/2020/11/20201124102548_1544383_710_340.jpg']);

  const [inputContents] = useState<content[]>([{ img: '', explain: '' }]);

  const add = () => {
    console.log('DDD');
    prevImg.push('http://img.etoday.co.kr/pto_db/2020/11/20201124102548_1544383_710_340.jpg');
    inputContents.push({ img: '', explain: '' });

    setRender(render + 1);
  };
  return (
    <div>
      CreateRec
      {prevImg.map((img: string, idx: number) => {
        return <Content key={idx} idx={idx} inputContents={inputContents} prevImg={prevImg} />;
      })}
      <button onClick={add}>dfdf</button>
    </div>
  );
};

export default CreateRecipe;
