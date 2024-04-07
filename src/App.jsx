import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Comics from "./pages/Comics";
import Favoris from "./pages/Favoris";
import Header from "./components/Header";
import ComicsById from "./pages/ComicsById";
// import Header from "./components/Header";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/comics" element={<Comics />} />
          <Route path="/favoris" element={<Favoris />} />
          <Route path="/comicsid" element={<ComicsById />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
