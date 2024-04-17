import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
        // console.log(response.data);

        setIsLoading(false);
      } catch (error) {
        // console.log(error);
      }
    };
    fetchData();
  }, [characterId]);

  return isLoading ? (
    <p className="text"> LOAD</p>
  ) : (
    <main className="comicsid-container">
      <section className="comicsid-img">
        <div className="comicsid-back">
          {data.comics.map((comic) => {
            return (
              <article className="comicsid-all" key={comic._id}>
                <h3 className="comicsid-name">{comic.title}</h3>
                <img
                  className="comicsid-photo"
                  src={`${comic.thumbnail.path}/portrait_fantastic.${comic.thumbnail.extension}`}
                  alt="comics specific character"
                />
                <p className="comicsid-description">{comic.description}</p>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
};
export default ComicsById;
