import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ComicsById = () => {
  const [data, setData] = useState({});
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
      {data.results.map((comics) => {
        return (
          <main key={comics._id}>
            <p>{comics.title}</p>
            <img
              src={`${comics.thumbnail.path}/portrait_medium.${comics.thumbnail.extension}`}
              alt="comics specific character"
            />
            <p>{comics.description}</p>
          </main>
        );
      })}
    </main>
  );
};
export default ComicsById;
