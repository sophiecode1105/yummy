import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyles from "../Css/Globalcss";
import CreateRecipe from "../Pages/CreateRecipe";
import Detail from "../Pages/Detail";
import Main from "../Pages/Main";
import Mypage from "../Pages/Mypage";
import RecipeList from "../Pages/RecipeList";
import Search from "../Pages/Search";
import Header from "./Header";
import LoginModal from "./Modal/LoginModal";

export const Routers = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      <LoginModal />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/search" element={<Search />} />
        <Route path="/recipelist" element={<RecipeList />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/recipelist/:id" element={<Detail />} />
        <Route path="/createrecipe" element={<CreateRecipe />} />
      </Routes>
    </BrowserRouter>
  );
};
