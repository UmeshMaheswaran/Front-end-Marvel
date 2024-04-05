import axios from "axios";
import { useEffect, useState } from "react";

const Comics = () => {
  const [comicsData, setComicsData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchComicsData = async () => {
      try {
        const { data } = await axios.get("http://localhost:3000/comics");
        setComicsData(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchComicsData();
  }, []);

  return isLoading ? (
    <></>
  ) : (
    <main>
      {comicsData.results.map((comics) => {
        return (
          <article className="" key={comics._id}>
            <h2>{comics.title}</h2>
            <img
              className="character-img"
              src={`${comics.thumbnail.path}/standard_xlarge.${comics.thumbnail.extension}`}
              alt="img-character"
            />
            <p>{comics.description}</p>
          </article>
        );
      })}
    </main>
  );
};

export default Comics;
