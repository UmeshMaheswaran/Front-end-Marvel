import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Comics from "./pages/Comics";
import Favoris from "./pages/Favoris";
import Header from "./components/Header";
import ComicsById from "./pages/ComicsById";

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
          <Route path="/comics" element={<Comics />} />
          <Route path="/favoris" element={<Favoris />} />
          <Route path="/comics/:id" element={<ComicsById />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
