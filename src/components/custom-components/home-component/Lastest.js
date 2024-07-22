import Image from "next/image";
import classes from "./Lastest.module.css";

const Lastest = (props) => {
  return (
    <>
      <section style={{ display: "flex" }}>
        <div
          style={{
            marginRight: 20,
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Image
            src={props.src}
            alt={props.title}
            className={classes.size}
            priority
          />
        </div>
        <div
          style={{
            width: "50%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            paddingTop: 10,
          }}
        >
          <div>
            <h4 className={classes.h1}>{props.title}</h4>
            <p className={classes.h2}>{props.description}</p>
          </div>
          <div>
            <p className={classes.p}>
              <span style={{ marginRight: 20 }}>
                <b>by {props.author}</b>
              </span>
              <span>
                <b>{props.time}</b>
              </span>
            </p>
            <p className={classes.p} style={{ marginTop: -6 }}>
              <b>Genre: </b>
              {props.genre}
            </p>
            <p className={classes.p} style={{ marginTop: -15 }}>
              <b>Streaming Platform: </b>
              {props.platform}
            </p>
          </div>
        </div>
      </section>
      <hr
        className={classes.length}
        style={{ opacity: 0.1, border: "1.4px solid" }}
      />
    </>
  );
};

export default Lastest;
