import Image from "next/image";

import classes from "./LikeAndComment.module.css";

const LikeAndComment = (props) => {
  return (
    <section
      style={{
        height: 260,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
      }}
    >
      <Image src={props.src} alt={props.title} className={classes.imgStyle} />
      <h3 style={{ marginTop: 10, fontSize: 16, fontWeight: "bold" }}>
        {props.title}
      </h3>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>{props.date}</div>
        <div
          style={{
            background: "transparent",
            border: "1px solid #E86C44",
            color: "#E86C44",
            borderRadius: 10,
            padding: "0 2%",
          }}
        >
          {props.badge}
        </div>
      </div>
    </section>
  );
};

export default LikeAndComment;
