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
          className="col-12 col-sm-12 col-md-4 col-lg-3 py-2"
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
        <div
          className="col-12 col-sm-12 col-md-8 col-lg-9 py-2"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}
        >
          <div>
            <h1
              className={classes.heading1}
              onClick={() => router.push("reviews/search")}
            >
              {props.title}
            </h1>
            <p className={classes.description}>{props.description}</p>
          </div>
          <div className={classes.subHeading}>
            by
            <span style={{ fontWeight: "bold", marginLeft: 4 }}>
              {props.author}
            </span>
            <span style={{ marginLeft: 30 }}>{props.date}</span>
          </div>
          <div>
            <div className={classes.subHeading}>
              <span style={{ fontWeight: "bold" }}>Genre:</span> {props.time}
            </div>
            <div className={classes.subHeading}>
              <span style={{ fontWeight: "bold" }}>Industry:</span>{" "}
              {props.author}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsItem;
