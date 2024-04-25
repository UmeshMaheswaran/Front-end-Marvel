import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = ({ search }) => {
  const [charactersData, setCharactersData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCharactersData = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:3000/characters?name=${search}`
        );
        setCharactersData(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCharactersData();
    console.log("test");
  }, [search]);

  return isLoading ? (
    <>Loading...</>
  ) : (
    <main className="charac-container">
      <section className="home-img">
        <div className="color-back">
          {charactersData.results.map((character) => {
            return (
              <Link key={character._id} to={`/comics/${character._id}`}>
                <div className="character-all" key={character._id}>
                  <div className="character-card">
                    <h2 className="name">{character.name}</h2>
                    <img
                      className="character-img"
                      src={`${character.thumbnail.path}/portrait_incredible.${character.thumbnail.extension}`}
                      alt="img-character"
                    />
                  </div>

                  {/* <p className="description">{character.description}</p> */}
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
};
export default Home;
