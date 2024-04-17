const IdComics = () => {
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
};

export default IdComics;
