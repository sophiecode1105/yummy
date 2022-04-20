import { useCallback, useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const Div = styled.div`
  padding: 0px 10px;
`;

const Button = styled.button``;
export const Header = () => {
  return (
    <Container>
      <Div>
        <Link to="/">메인페이지</Link>
      </Div>
      <Div>
        <Link to="/mypage">마이페이지</Link>
      </Div>
      <Div>
        <Link to="/join">회원가입</Link>
      </Div>
      <Div>
        <Link to="/upload">사진올리기</Link>
      </Div>
    </Container>
  );
};
