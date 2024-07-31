"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import classes from "./SingleLastestNews.module.css";

const NewsItem = (props) => {
  const router = useRouter();
  return (
    <>
      <div className="row">
        <div
          className="col-12 col-sm-12 col-md-8 col-lg-9 py-2 order-2 order-md-1"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}
        >
          <div>
            <h1 className={classes.heading1}>{props.title}</h1>
            <p className={classes.description}>{props.description}</p>
          </div>
          <div className={classes.subHeading}>
            by
            <span style={{ fontWeight: "bold", marginLeft: 4 }}>
              {props.author}
            </span>
            <span style={{ marginLeft: 20 }}>{props.time} ago</span>
          </div>
        </div>
        <div
          className="col-12 col-sm-12 col-md-4 col-lg-3 py-2 order-1 order-md-2"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Image
            className={classes.img}
            src={props.src}
            alt={props.title}
            priority
          />
        </div>
      </div>
      <hr style={{ marginTop: 20, border: "1.4px solid #000" }} />
    </>
  );
};

export default NewsItem;
