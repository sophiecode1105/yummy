import { useState } from "react";
import { content } from "../../utils/typeDefs";
import { Container } from "../../styled/create";
import { ImgFile, ImgLabel, UpText, UserAvatar } from "../../styled/modal";

const Content = ({
  idx,
  inputContents,
  prevImg,
}: {
  idx: number;
  inputContents: content[];
  prevImg: string[];
}) => {
  const [render, setRender] = useState(0);

  const previewFile = (file: File) => {
    const reader = new FileReader();

    reader.onload = () => {
      prevImg[idx] = String(reader.result);
      //   setPrevImg([...prevImg]);
      setRender(render + 1);
    };

    reader.readAsDataURL(file);
  };

  return (
    <Container>
      <ImgLabel htmlFor="input_file">
        <UpText>
          이미지 <br />
          업로
        </UpText>
        <UserAvatar src={prevImg[idx]} />
        <ImgFile
          id="input_file"
          type="file"
          accept="*"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            const target = event.target as HTMLInputElement;
            if (target.files) {
              const file = target.files[0];

              inputContents[idx].img = file;
              return previewFile(file);
            }
          }}
        />
      </ImgLabel>
      <input
        onChange={(e) => {
          inputContents[idx].explain = e.target.value;
        }}
      ></input>
    </Container>
  );
};

export default Content;
