import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const CharacterById = () => {
  const [data, setData] = useState({});
  const { comicsId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
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
    <p className="loading-characterid"></p>
  ) : (
    <main className="characterid-container">
      <section className="characterid-img">
        <div className="characterid-back">
          <article className="characterid-all" key={data._id}>
            <div className="characterid-card">
              {/* <Link to={"/comics"}> */}{" "}
              <h4 className="characterid-name">{data.title}</h4>
              <img
                className="characterid-photo"
                src={`${data.thumbnail.path}/portrait_incredible.${data.thumbnail.extension}`}
                alt="character specific comic"
                onClick={() => navigate(-1)}
              />
              {/* </Link> */}
              <p className="characterid-description">{data.description}</p>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
};

export default CharacterById;
