import React, { useState, useEffect } from "react";
import "./App.css";
import PersonIcon from "@material-ui/icons/Person";
import Header from "./components/header/Header";
import LandingPage from "./components/landingPage/LandingPage";
import Users from "./components/user/Users";
import Divider from "@material-ui/core/Divider";


function App() {

  return (
    <>
    <Header/>
    <LandingPage/>
    </>
  );
}

export default App;
