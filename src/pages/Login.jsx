import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = ({ handleToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "https://lereacteur-marvel-api.herokuapp.com/user/login",
        {
          email: email,
          password: password,
        }
      );

      handleToken(response.data.token);
      navigate("/");
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <main className="login-container">
      <form onSubmit={handleSubmit}>
        <div className="login-block">
          <h2 className="login-title">Se connecter</h2>
          <input
            value={email}
            type="text"
            placeholder="Adresse Email"
            name="email"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <input
            value={password}
            type="password"
            placeholder="Mot de passe"
            name="password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </div>

        <div>
          <button className="login-button" type="submit">
            Se connecter
          </button>
        </div>

        <h3 className="Login-link">
          <Link to={"/signup"}> Pas encore de compte ? Inscrit-toi !</Link>
        </h3>
      </form>
    </main>
  );
};

export default Login;
