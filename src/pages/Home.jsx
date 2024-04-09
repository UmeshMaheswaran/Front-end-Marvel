import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const [charactersData, setCharactersData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchCharactersData = async () => {
      try {
        const { data } = await axios.get("http://localhost:3000/characters");
        setCharactersData(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCharactersData();
  }, []);

  return isLoading ? (
    <></>
  ) : (
    <main className="charac-container">
      <section className="home-img">
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

        <div className="color-back">
          {charactersData.results.map((character) => {
            return (
              <div className="character-all" key={character._id}>
                <h2 className="name">{character.name}</h2>
                <img
                  className="character-img"
                  src={`${character.thumbnail.path}/standard_xlarge.${character.thumbnail.extension}`}
                  alt="img-character"
                />
                <p className="description">{character.description}</p>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
};
export default Home;
