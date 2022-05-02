import { gql, useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { modal, signUp, token } from "../../state/state";
import {
  AlertBox,
  Container,
  GoogleButton,
  KakaoButon,
  SocalLoginTitle,
  SocialButtonWrap,
  InTitle,
  ButtonWrap,
  InButton,
  SignInInput,
  SignInForm,
} from "../../styled/modal";

const postLogin = gql`
  mutation ($email: String!, $password: String!) {
    login(email: $email, password: $password)
  }
`;
const googleLogin = gql`
  query ($code: String!) {
    google(code: $code)
  }
`;

function Signin() {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const setToken = useSetRecoilState(token);
  const setModal = useSetRecoilState(modal);
  const signUpClick = useSetRecoilState(signUp);
  const [errorMessage, setErrorMessage] = useState("");
  const handleInputValue = (key: any) => (e: any) => {
    setLoginInfo({ ...loginInfo, [key]: e.target.value });
  };
  const nav = useNavigate();
  const url = new URL(window.location.href);
  const code = url.searchParams.get("code");
  const {
    data = { google: "" },
    loading,
    error,
  } = useQuery(googleLogin, {
    variables: { code },
  });
  let [postlogin] = useMutation(postLogin);

  const handleLogin = async () => {
    const { email, password } = loginInfo;
    if (Object.values(loginInfo).includes("")) {
      setErrorMessage("모든 항목을 입력해 주세요.");
      return;
    }

    const { data = { login: "" } } = await postlogin({
      variables: {
        email,
        password,
      },
    });
    console.log(email, password);
    if (data.login !== "") {
      setModal(false);
      setToken(data.login);
    }
    setLoginInfo({ email: "", password: "" });
    window.location.reload();
  };

  if (data.google !== "") {
    setToken(data.google);

    nav("/");
    window.location.reload();
  }

  return (
    <>
      <Container>
        <SignInForm onSubmit={(e) => e.preventDefault()}>
          <InTitle>
            <h1>로그인</h1>
          </InTitle>
          <SignInInput
            type="email"
            placeholder="이메일"
            value={loginInfo.email}
            onChange={handleInputValue("email")}
          />
          <SignInInput
            type="password"
            placeholder="비밀번호"
            value={loginInfo.password}
            onChange={handleInputValue("password")}
          />
          <AlertBox className="alert-box">{errorMessage}</AlertBox>
          <SocalLoginTitle>SOCIAL LOGIN</SocalLoginTitle>
          <SocialButtonWrap>
            <KakaoButon>kakao</KakaoButon>
            <GoogleButton href="https://accounts.google.com/o/oauth2/v2/auth?client_id=786693724856-3b1fu2t449chp8q8d4bh7omg8k5f3cqu.apps.googleusercontent.com&redirect_uri=http://localhost:3000&response_type=code&scope=https://www.googleapis.com/auth/userinfo.email">
              google
            </GoogleButton>
          </SocialButtonWrap>
          <ButtonWrap>
            <InButton type="submit" onClick={handleLogin}>
              LOGIN
            </InButton>
            <InButton
              type="submit"
              onClick={() => {
                signUpClick(true);
              }}
            >
              SIGN UP
            </InButton>
          </ButtonWrap>
        </SignInForm>
      </Container>
    </>
  );
}

export default Signin;
