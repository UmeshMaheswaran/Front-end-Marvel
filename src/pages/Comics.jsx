import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Comics = () => {
  const [comicsData, setComicsData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const fetchComicsData = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:3000/comics?id=${id}`
        );
        setComicsData(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchComicsData();
  }, [id]);

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <main className="comics-container">
      <section className="comics-img">
        <div className="comics-back">
          {comicsData.results.map((comics) => {
            return (
              <Link key={comics._id} to={`/comicsbyid/${comics._id}`}>
                <article className="comics-all">
                  <h2 className="comics-name">{comics.title}</h2>
                  <img
                    className="comics-photo"
                    src={`${comics.thumbnail.path}/standard_xlarge.${comics.thumbnail.extension}`}
                    alt="img-comics"
                  />
                  <p className="comics-description">{comics.description}</p>
                </article>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default Comics;
