import Home from "./components/pages/Home/Home";
import Profil from "./components/pages/Profil/Profil";
import "./App.css";
import { BrowserRouter, Link, NavLink, Route, Routes } from "react-router-dom";
import LogoSite from "./assets/icons/logo.png";
import { useEffect } from "react";
import Auth from "./components/pages/Auth/Auth";
import Navbar from "./components/Navbar/Navbar";

function App() {
  useEffect(() => {
    // const token = localStorage.getItem("token");
    // if (token) {
    fetch("/users/", {
      // headers: { Authorization: `Bearer ${token}` },:
    }).then((response) => {
      response.json().then((data) => {
        // setUser(data.data);
        // setIsLoading(false);
      });
    });
    // } else {
    // setIsLoading(false);
    // }
  }, []);
  return (
    <header>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </BrowserRouter>
    </header>
  );
}

export default App;

//rfc
