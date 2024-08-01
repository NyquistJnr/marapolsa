import Image from "next/image";
import classes from "./MovieTvShow.module.css";
import Link from "next/link";

const MovieTvShow = (props) => {
  return (
    <main
      style={{
        border: "1.2px solid #999",
        padding: "10px 5px",
        borderRadius: 10,
      }}
    >
      <section style={{ display: "flex" /* justifyContent: "space-evenly" */ }}>
        <div>
          <Image
            src={props.src}
            alt={props.title}
            className={classes.size}
            style={{
              marginRight: 20,
              marginLeft: 10 /* objectFit: "cover"  */,
            }}
            priority
          />
        </div>
        <div
          style={{
            justifyContent: "space-between",
            display: "flex",
            flexDirection: "column",
            width: "50%",
            marginTop: 5,
          }}
        >
          <div>
            <Link href="/movies/result">
              <h3 className={classes.h1} style={{ fontWeight: "bold" }}>
                {props.title}
              </h3>
            </Link>
            <p className={classes.h2}>{props.description}</p>
          </div>
          <div>
            <p className={classes.p}>
              <b>Release Date: </b>
              {props.time}
            </p>
            <p style={{ marginTop: -15 }} className={classes.p}>
              {props.genre}
            </p>
            <p style={{ marginTop: -15 }} className={classes.p}>
              <b>Streaming Platform: </b>
              {props.platform}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MovieTvShow;
