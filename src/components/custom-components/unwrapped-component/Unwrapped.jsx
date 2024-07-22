import Image from "next/image";

import classes from "./Unwrapped.module.css";

import img from "../../../../public/images/templates-imgs/Unwrapped.png";

const Unwrapped = () => {
  return (
    <section
      style={{
        background: "#F6EFED",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "5% 0",
      }}
    >
      <Image
        src={img}
        alt="Unwrapped Image"
        className={classes.size}
        priority
      />
    </section>
  );
};

export default Unwrapped;
