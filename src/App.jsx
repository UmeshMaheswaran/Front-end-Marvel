import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";

import Home from "./pages/Home";
import Comics from "./pages/Comics";
import Favoris from "./pages/Favoris";
import Header from "./components/Header";
import ComicsById from "./pages/ComicsById";
import CharacterById from "./pages/CharacterById";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

function App() {
  const [userToken, setUserToken] = useState(Cookies.get("userToken") || null);
  const [search, setSearch] = useState("");

  const handleToken = (token) => {
    if (token) {
      Cookies.set("userToken", token, { expires: 7 });
      setUserToken(token);
    } else {
      Cookies.remove("userToken");
      setUserToken(null);
    }
  };

  return (
    <>
      <Router>
        <Header
          userToken={userToken}
          handleToken={handleToken}
          search={search}
          setSearch={setSearch}
        />

        <Routes>
          <Route path="/" element={<Home search={search} />} />
          <Route path="/comics" element={<Comics search={search} />} />
          <Route path="/favoris" element={<Favoris />} />
          <Route path="/comics/:characterId" element={<ComicsById />} />
          <Route path="/comic/:comicsId" element={<CharacterById />} />
          <Route
            path="/signup"
            element={<Signup handleToken={handleToken} />}
          />
          <Route path="/login" element={<Login handleToken={handleToken} />} />
          <Route path="*" element={<p>Error 404</p>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
