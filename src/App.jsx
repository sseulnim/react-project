import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import SingIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import { useState } from "react";
// import { getUserInfo } from "../lib/api/auth";
// import { v4 as uuidv4 } from "uuid";
import "./App.css";
import Layout from "./components/Layout";

function App() {
  const [user, setUser] = useState(null);

  // console.log("로그인된 유저 정보:", user);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout user={user} setUser={setUser} />}>
            <Route index element={<Home user={user} />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route
              path="/profile"
              element={<Profile user={user} setUser={setUser} />}
            />
          </Route>
          <Route path="/sign_in" element={<SingIn setUser={setUser} />} />
          <Route path="/sign_up" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
