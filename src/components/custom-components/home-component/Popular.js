import classes from "./Popular.module.css";
import Image from "next/image";

const Popular = (props) => {
  return (
    <>
      <section>
        <div style={{ marginTop: 30 }}>
          <Image
            src={props.src}
            alt={props.title}
            style={{ width: "100%" }}
            priority
          />
        </div>
        <div style={{ marginTop: 20, width: "90%" }}>
          <h3 className={classes.h1} style={{ fontWeight: "bold" }}>
            {props.title}
          </h3>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <p className={classes.p}>{props.time}</p>
            <button
              className="btn"
              style={{ color: "#E86C44", border: "1px solid #E86C44" }}
            >
              {props.identity}
            </button>
          </div>
        </div>
      </section>
      <hr style={{ marginBottom: 30 }} />
    </>
  );
};

export default Popular;
