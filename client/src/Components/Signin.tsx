import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { signUp } from '../state/state';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* margin: auto; */
`;
const SigninContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px auto;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 20px;
  border-radius: 5px;
`;

const InputWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;
const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;
const Text = styled.div`
  margin-right: 10px;
`;

const ButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const AlertBox = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  width: 200px;
  height: 25px;
  background-color: rgb(65, 78, 182);
  color: #fff;
  font-size: 15px;
  border-radius: 5px;
  margin: 10px;
  cursor: pointer;
`;

const SocalLoginTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SocialButtonWrap = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 5px;
`;

const SocialButton = styled.button`
  height: 50px;
  border-radius: 100%;
`;

const GoogleButton = styled(SocialButton)`
  background-color: red;
`;

const KakaoButon = styled(SocialButton)`
  background-color: rgb(243, 199, 71);
`;

function Signin() {
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: '',
  });

  const signUpClick = useSetRecoilState(signUp);
  const [errorMessage, setErrorMessage] = useState('');
  const handleInputValue = (key: any) => (e: any) => {
    setLoginInfo({ ...loginInfo, [key]: e.target.value });
  };

  const login = (email: String, password: String) => {};

  const handleLogin = async () => {
    const { email, password } = loginInfo;

    if (Object.values(loginInfo).includes('')) {
      setErrorMessage('모든 항목을 입력해 주세요.');
      return;
    }
  };

  const closeModal = () => {};

  return (
    <>
      <Container>
        <SigninContainer>
          <form onSubmit={(e) => e.preventDefault()}>
            <Title>
              <h1 className="text-grey-600 underline">Sign In</h1>
            </Title>
            <InputWrap>
              <Text>이메일</Text>
              <input type="email" placeholder="이메일" onChange={handleInputValue('email')} />
            </InputWrap>
            <InputWrap>
              <Text>비밀번호</Text>
              <input type="password" placeholder="비밀번호" onChange={handleInputValue('password')} />
            </InputWrap>

            <SocalLoginTitle>Social Login</SocalLoginTitle>

            <SocialButtonWrap>
              <KakaoButon>kakao</KakaoButon>
              <GoogleButton>google</GoogleButton>
            </SocialButtonWrap>

            <ButtonWrap>
              <Button type="submit" onClick={handleLogin}>
                Login
              </Button>
              <Button
                type="submit"
                onClick={() => {
                  signUpClick(true);
                }}
              >
                Sign Up!
              </Button>
            </ButtonWrap>
            <AlertBox className="alert-box">{errorMessage}</AlertBox>
          </form>
        </SigninContainer>
      </Container>
    </>
  );
}

export default Signin;
