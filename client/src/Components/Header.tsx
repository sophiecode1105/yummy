import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { modal, token } from '../state/state';
import { Container, Div, FindRecipe, Img, RightCon2 } from '../styled/header';

const Header = () => {
  const modals = useSetRecoilState(modal);
  const tokens = useRecoilValue(token);
  return (
    <Container>
      <Link to="/">
        {' '}
        <Img src={logo} />
      </Link>

      <RightCon2>
        <FindRecipe to="/search">레시피 찾기</FindRecipe>
        {tokens ? (
          <Link to="/mypage">
            <Div>마이 페이지</Div>
          </Link>
        ) : (
          <Div onClick={() => modals((prev: boolean) => !prev)}>로그인</Div>
        )}
      </RightCon2>
    </Container>
  );
};

export default Header;
