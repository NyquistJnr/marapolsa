import { Fragment } from "react";
import Lastest from "./Lastest";

import classes from "./Lastest.module.css";

const LastestList = (props) => {
  return (
    <Fragment>
      <h3 style={{ fontWeight: "bold" }}>{props.name}</h3>
      <hr className={classes.length} style={{ border: "1.4px solid" }} />
      {props.data.map((item) => (
        <Lastest {...item} key={Math.random()} />
      ))}
    </Fragment>
  );
};

export default LastestList;
