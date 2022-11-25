import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import About from "./components/About";
import Boundary from "./components/Boundary";
import Profiles from "./components/Profiles";
import Addlinks from "./components/Addlinks";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./config/fconfig";
import React, { useEffect, useState } from "react";
import { useLogin } from "./hooks/useLogin";

function App() {
  const [User, setUser] = useState("");
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(await useLogin(user.email));
        console.log(User);
      } else {
        console.log("No user logged in");
        setUser("");
      }
    });
  }, [User]);

  return (
    <BrowserRouter>
      <Navbar user={User}></Navbar>
      <div className="App bg-slate-800 min-h-screen min-w-full grid place-items-center">
        <Routes>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/@:username" element={<Profiles />}></Route>
          {User ? (
            <Route path="/" element={<Dashboard />}>
              <Route path="mylinks"></Route>
              <Route
                path="addlinks"
                element={<Addlinks user={User}></Addlinks>}
              ></Route>
            </Route>
          ) : (
            <Route path="/" element={<Landing />}></Route>
          )}
          <Route path="*" element={<Boundary />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
