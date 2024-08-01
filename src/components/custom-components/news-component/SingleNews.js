"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { Container } from "react-bootstrap";

import classes from "./SingleNews.module.css";

import TrendingNews, { trendingNewsData } from "./TrendingNews";
import CommentShare from "@/components/general-components/CommentShare";
import MainSearchFilterBar from "@/components/general-components/MainSearchFilter";

const SingleNews = (props) => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  console.log(id);

  const [singleNews, setSingleNews] = useState({});

  useEffect(() => {
    const fetchedNews = trendingNewsData.find((news) => news.id === +id); // assuming trendingNewsData is available
    console.log(fetchedNews);
    setSingleNews(fetchedNews);
  }, [id]);

  if (singleNews == null) {
    return <h1>No data with the id</h1>;
  }
  // const { trendingNews } = router.query;
  return (
    <Container>
      <MainSearchFilterBar />
      <h2 style={{ fontWeight: "bold", marginBottom: 20 }}>
        {singleNews.title}
      </h2>
      <Image
        src={singleNews.src}
        className={classes.imgStyle}
        alt="Single News Image"
        /* priority */
      />
      <div
        style={{ display: "flex", justifyContent: "space-between" }}
        className="py-3"
      >
        <div>By: {singleNews.author}</div>
        <div>Published: {singleNews.time} ago</div>
      </div>
      <div>{singleNews.description}</div>
      <CommentShare />
      <section style={{ marginTop: 50 }}>
        <TrendingNews title="Recommended News" />
      </section>
    </Container>
  );
};

export default SingleNews;
