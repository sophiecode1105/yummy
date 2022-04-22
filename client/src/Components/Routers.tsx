import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyles from "../Css/Globalcss";
import { Join } from "../Pages/Join";
import { Main } from "../Pages/Main";
import { Mypage } from "../Pages/Mypage";
import { Upload } from "../Pages/Upload";
import { Header } from "./Header";
import LoginModal from "./LoginModal";

export const Routers = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      <LoginModal />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/upload" element={<Upload />} />
      </Routes>
    </BrowserRouter>
  );
};
