import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Join } from "../Pages/Join";
import { Main } from "../Pages/Main";
import { Mypage } from "../Pages/Mypage";
import { Header } from "./Header";

export const Routers = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/join" element={<Join />} />
      </Routes>
    </BrowserRouter>
  );
};
