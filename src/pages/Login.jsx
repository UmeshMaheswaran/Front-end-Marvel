import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = ({ handleToken }) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setErrorMessage("Email ou mot de passe incorrect");

      const response = await axios.post("http://localhost:3000/users/login", {
        email: email,
        password: password,
      });

      handleToken(response.data.token);
      navigate("/");
    } catch (error) {
      console.log(error);
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

        <div className="clic-login">
          <button className="login-button" type="submit">
            Se connecter
          </button>
          {errorMessage && <p style={{ color: "red" }}> {errorMessage}</p>}
        </div>

        <h3 className="Login-link">
          <Link to={"/signup"}>
            {" "}
            <p className="log-link">Pas encore de compte ? Inscrit-toi !</p>
          </Link>
        </h3>
      </form>
    </main>
  );
};

export default Login;
