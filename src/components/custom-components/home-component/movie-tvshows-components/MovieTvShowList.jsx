import MovieTvShow from "./MovieTvShow";

const MovieTvShowList = (props) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 30,
        }}
      >
        <h3>{props.name}</h3>
        <p>See more</p>
      </div>
      <hr style={{ border: "1.4px solid" }} />
      <div className="row" style={{ marginBottom: 30 }}>
        {props.data.map((item) => (
          <div
            className="col-12 col-sm-12 col-md-6 col-lg-6 py-2"
            key={Math.random()}
          >
            <MovieTvShow {...item} />
          </div>
        ))}
      </div>
    </>
  );
};

export default MovieTvShowList;
