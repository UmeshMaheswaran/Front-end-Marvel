import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const ComicsById = () => {
  const [data, setData] = useState({});
  const { characterId } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  console.log(characterId);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/comics/${characterId}`
        );
        setData(response.data);
        console.log(response.data);

        setIsLoading(false);
      } catch (error) {
        // console.log(error);
      }
    };
    fetchData();
  }, [characterId]);

  return isLoading ? (
    <p className="loading-comicsid"></p>
  ) : (
    <main className="comicsid-container">
      <section className="comicsid-img">
        <div className="titleandimg ">
          <div className="photocomicsid-card">
            <Link to={"/"}>
              <h4 className="titlecomicsid">{data.name}</h4>
              <img
                className="photocomicsid"
                src={`${data.thumbnail.path}/portrait_fantastic.${data.thumbnail.extension}`}
                alt="paintcomics id "
              />
            </Link>
            <p className="comicsiddescription">{data.description}</p>
          </div>
        </div>

        <div className="comicsid-back">
          {data.comics.map((comic) => {
            return (
              <Link key={comic._id} to={`/comic/${comic._id}`}>
                <article className="comicsid-all" key={comic._id}>
                  <div className="comicsid-card">
                    <h3 className="comicsid-name">{comic.title}</h3>
                    <img
                      className="comicsid-photo"
                      src={`${comic.thumbnail.path}/portrait_incredible.${comic.thumbnail.extension}`}
                      alt="comics specific character"
                    />
                  </div>

                  {/* <p className="comicsid-description">{comic.description}</p> */}
                </article>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
};
export default ComicsById;
