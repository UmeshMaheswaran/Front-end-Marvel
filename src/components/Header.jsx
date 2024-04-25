import { Link } from "react-router-dom";

const Header = ({ search, setSearch, token, handleToken }) => {
  return (
    <>
      <div className="container">
        <div className="header-container">
          <Link to="/">
            <img
              className="logomarvel"
              src="src/assets/img/Marvel_Logo.svg.png"
              alt="marvel"
            />
          </Link>
          <div>
            <input
              className="searchbarre"
              value={search}
              type="text"
              placeholder="Search..."
              onChange={(event) => {
                setSearch(event.target.value);
              }}
            />
          </div>

          <div>
            <Link to="/comics">
              {" "}
              <button className="buttoncomics" type="submit">
                Comics
              </button>{" "}
            </Link>
          </div>
          <div>
            <Link to="/">
              {" "}
              <button className="buttoncharacter" type="submit">
                Characters
              </button>
            </Link>
          </div>
          <div>
            <Link to="/favoris">
              {" "}
              <button className="buttonfavoris" type="submit">
                Favoris
              </button>
            </Link>
          </div>
          {token ? (
            <Link to={"/"}>
              <button
                className="disconnect"
                onClick={() => {
                  handleToken(null);
                }}
              >
                Disconnect
              </button>
            </Link>
          ) : (
            <>
              <div className="twobutton">
                <Link to="/signup">
                  <button className="register">S'inscrire</button>
                </Link>
                <Link to="/login">
                  <button className="connect">Se connecter</button>
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
