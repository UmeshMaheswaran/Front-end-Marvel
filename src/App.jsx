import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Comics from "./pages/Comics";
import Favoris from "./pages/Favoris";
import Header from "./components/Header";
import ComicsById from "./pages/ComicsById";
import CharacterById from "./pages/CharacterById";

import { useState } from "react";
// import Header from "./components/Header";

function App() {
  const [search, setSearch] = useState("");
  return (
    <>
      <Router>
        <Header search={search} setSearch={setSearch} />

        <Routes>
          <Route path="/" element={<Home search={search} />} />
          <Route path="/comics" element={<Comics search={search} />} />
          <Route path="/favoris" element={<Favoris />} />
          <Route path="/comics/:characterId" element={<ComicsById />} />
          <Route path="/comic/:comicsId" element={<CharacterById />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
