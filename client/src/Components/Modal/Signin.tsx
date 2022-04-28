import { gql, useMutation } from '@apollo/client';
import { useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { modal, signUp, token } from '../../state/state';
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
} from '../../styled/modal';

const postLogin = gql`
  mutation ($email: String!, $password: String!) {
    login(email: $email, password: $password)
  }
`;

function Signin() {
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: '',
  });
  const setToken = useSetRecoilState(token);

  const setModal = useSetRecoilState(modal);

  const signUpClick = useSetRecoilState(signUp);
  const [errorMessage, setErrorMessage] = useState('');
  const handleInputValue = (key: any) => (e: any) => {
    setLoginInfo({ ...loginInfo, [key]: e.target.value });
  };
  let [postlogin] = useMutation(postLogin);

  const handleLogin = async () => {
    const { email, password } = loginInfo;
    if (Object.values(loginInfo).includes('')) {
      setErrorMessage('모든 항목을 입력해 주세요.');
      return;
    }

    const { data = { login: '' } } = await postlogin({
      variables: {
        email,
        password,
      },
    });

    if (data.login !== '') {
      setModal(false);
      setToken(data.login);
    }
    setLoginInfo({ email: '', password: '' });
  };

  return (
    <>
      <Container>
        <SignInForm onSubmit={(e) => e.preventDefault()}>
          <InTitle>
            <h1>로그인</h1>
          </InTitle>
          <SignInInput type="email" placeholder="이메일" value={loginInfo.email} onChange={handleInputValue('email')} />
          <SignInInput
            type="password"
            placeholder="비밀번호"
            value={loginInfo.password}
            onChange={handleInputValue('password')}
          />
          <AlertBox className="alert-box">{errorMessage}</AlertBox>
          <SocalLoginTitle>SOCIAL LOGIN</SocalLoginTitle>
          <SocialButtonWrap>
            <KakaoButon>kakao</KakaoButon>
            <GoogleButton>google</GoogleButton>
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
