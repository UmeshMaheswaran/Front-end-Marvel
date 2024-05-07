import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// import { useNavigate } from "react-router-dom";

const Comics = ({ search }) => {
  const [comicsData, setComicsData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  // const navigate = useNavigate();

  useEffect(() => {
    const fetchComicsData = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:3000/comics?title=${search}`
        );
        setComicsData(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchComicsData();
    console.log("test");
  }, [search]);

  return isLoading ? (
    <p className="loading-comics"></p>
  ) : (
    <main className="comics-container">
      <section className="comics-img">
        <div className="comics-back">
          {comicsData.results.map((comics) => {
            return (
              <>
                <Link key={comics._id} to={`/comic/${comics._id}`}>
                  <article className="comics-all" key={comics._id}>
                    <div className="comics-card">
                      <h2 className="comics-name">{comics.title}</h2>
                      {/* <button
                      className="buttonfav" // Définit la classe CSS du bouton pour le style
                      onClick={(e) => {
                        // Déclenche cette fonction quand le bouton est cliqué
                        e.preventDefault(); // Empêche le comportement par défaut du clic (évite de naviguer via ton Link)

                        // Récupérer le cookie 'titlecomics'. Ce cookie contient les ID des comics favoris enregistrés
                        const comicsFav = Cookies.get("titlecomics");

                        if (!comicsFav) {
                          // Si le cookie 'titlecomics' n'existe pas
                          // Créer un nouveau cookie 'titlecomics' avec un tableau contenant l'identifiant du comic actuel
                          Cookies.set(
                            "titlecomics",
                            JSON.stringify([comics._id]) // Convertit le tableau en une chaîne JSON pour le stockage dans le cookie
                          );
                        } else {
                          // Si le cookie existe déjà
                          // Convertir la chaîne JSON en un tableau d'identifiants de comics favoris
                          const parsedComicsFav = JSON.parse(comicsFav);

                          // Ajouter l'identifiant du comic actuel au tableau des favoris
                          parsedComicsFav.push(comics._id);

                          // Mettre à jour le cookie 'titlecomics' avec le nouveau tableau de favoris converti en chaîne JSON
                          Cookies.set(
                            "titlecomics",
                            JSON.stringify(parsedComicsFav) // Convertit le tableau mis à jour en chaîne JSON
                          );
                        }
                      }}
                    >
                      Favoris
                    </button> */}
                      <img
                        className="comics-photo"
                        src={`${comics.thumbnail.path}/portrait_incredible.${comics.thumbnail.extension}`}
                        alt="img-comics"
                      />
                    </div>

                    {/* <p className="comics-description">{comics.description}</p> */}
                  </article>
                </Link>
              </>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default Comics;
