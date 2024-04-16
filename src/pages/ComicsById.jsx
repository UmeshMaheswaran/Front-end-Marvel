import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ComicsById = () => {
  const [data, setData] = useState();
  const { characterId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/comics/${characterId}`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [characterId]);
  return isLoading ? (
    <p className="text"> LOAD</p>
  ) : (
    <main>
      {data.comics.map((comic) => {
        return (
          <main key={comic._id}>
            <p>{comic.title}</p>
            <img
              src={`${comic.thumbnail.path}/portrait_medium.${comic.thumbnail.extension}`}
              alt="comics specific character"
            />
            <p>{comic.description}</p>
          </main>
        );
      })}
    </main>
  );
};
export default ComicsById;
