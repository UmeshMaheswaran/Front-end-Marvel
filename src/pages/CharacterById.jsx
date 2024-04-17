import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const CharacterById = () => {
  const [data, setData] = useState({});
  const { comicsId } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  console.log(comicsId);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/comic/${comicsId}`
        );
        setData(response.data);
        console.log(response.data);

        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [comicsId]);

  return isLoading ? (
    <p>LOADINNNNGGG...</p>
  ) : (
    <main className="characterid-container">
      <section className="characterid-img">
        <div className="characterid-back">
          <article className="characterid-all" key={data._id}>
            <h4 className="characterid-name">{data.title}</h4>
            <img
              className="characterid-photo"
              src={`${data.thumbnail.path}/portrait_fantastic.${data.thumbnail.extension}`}
              alt="character specific comic"
            />
            <p className="characterid-description">{data.description}</p>
          </article>
        </div>
      </section>
    </main>
  );
};

export default CharacterById;