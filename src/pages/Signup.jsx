import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = ({ handleToken }) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setErrorMessage("");

      const response = await axios.post("http://localhost:3000/users/signup", {
        email: email,
        username: username,
        password: password,
      });
      console.log(response.data);
      handleToken(response.data.token);
      navigate("/");
    } catch (error) {
      console.log(error);

      console.log(error.response);

      //   if (error.response.status === 409) {
      //     setErrorMessage(
      //       "This email already has an account, please use another one"
      //     );
      //   } else if (error.reponse.data.message === "Missing parameters") {
      //     setErrorMessage("Please fill in all the fields");
      //   }
    }
  };

  return (
    <main className="signuppage">
      <h1>Inscription</h1>
      <form className="signupform" onSubmit={handleSubmit}>
        <p className="ndc"></p>
        <input
          value={username}
          type="text"
          placeholder="Nom d'utilisateur"
          name="username"
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <p className="mail"></p>
        <input
          value={email}
          type="email"
          placeholder="Email"
          name="email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <p className="mdp"></p>
        <input
          value={password}
          type="password"
          placeholder="Mot de passe"
          name="password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />

        <div className="clic">
          <button type="submit">S'inscrire</button>
          {errorMessage && <p style={{ color: "red" }}> {errorMessage}</p>}
        </div>
      </form>
      <Link to={"/login"}>
        <p className="link-sentences"> Tu as déjà un compte ? Connecte-toi !</p>
      </Link>
    </main>
  );
};

export default Signup;
