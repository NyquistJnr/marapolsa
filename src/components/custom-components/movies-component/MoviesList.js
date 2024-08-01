"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import { Container } from "react-bootstrap";
import classes from "./MoviesList.module.css";
import MovieTvShow from "../home-component/movie-tvshows-components/MovieTvShow";

import { data4 } from "@/app/page";
import { convertKebabCaseToNormal } from "@/utils/url-encoding";
import CompleteSearchFilterBar from "@/components/general-components/CompleteSearchFilter";

const MoviesList = (props) => {
  const [title, setTitle] = useState("");
  const searchParams = useSearchParams();
  const caterogy = searchParams.get("caterogy");
  useEffect(() => {
    // console.log(caterogy);
    setTitle(convertKebabCaseToNormal(caterogy));
  }, [caterogy]);

  return (
    <Container>
      <CompleteSearchFilterBar />
      <h3 style={{ fontWeight: "bold", margin: "30px 0" }}>{title}</h3>
      <section className="row" style={{ marginBottom: 50 }}>
        {data4.map((data) => (
          <div
            className="col-12 col-sm-12 col-md-6 col-lg-6 py-2"
            key={Math.random()}
          >
            <MovieTvShow {...data} />
          </div>
        ))}
      </section>
    </Container>
  );
};

export default MoviesList;
