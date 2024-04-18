import Cookies from "js-cookie";
import { Navigate, useNaviagte } from "react-router-dom";

const Favoris = () => {
  const favoris = Cookies.getJSON(`favoris`);

  return (
    <>
      <h1>Je suis la page Favoris</h1>
    </>
  );
};

export default Favoris;
