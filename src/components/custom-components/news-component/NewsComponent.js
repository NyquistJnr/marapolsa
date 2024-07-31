// pages/index.js
"use client";

import { Button, Container } from "react-bootstrap";

import TrendingNews from "./TrendingNews";
import NewsItem from "./SingleLastestNews";
import MainSearchFilterBar from "@/components/general-components/MainSearchFilter";
import styles from "./NewsComponent.module.css";

// Template Image
import img1 from "../../../../public/images/templates-imgs/showReview1.png";

const NewsComponent = () => {
  const newsData = [
    {
      title: "Different Strokes: Same old story saved by good casting",
      description:
        "Lorem ipsum dolor sit amet consectetur. Bibendum ornare velit elementum tortor mattis. Lorem ipsum ut vel nunc curabitur tempus dui magna morbi. Suspendisse consectetur a proin fermentum tincidunt molestie tortor. Auctor duis lorem ultrices malesuada scelerisque...",
      time: "3 hours",
      author: "Chigox",
      src: img1,
    },
    {
      title: "Different Strokes: Same old story saved by good casting",
      description:
        "Lorem ipsum dolor sit amet consectetur. Bibendum ornare velit elementum tortor mattis. Lorem ipsum ut vel nunc curabitur tempus dui magna morbi. Suspendisse consectetur a proin fermentum tincidunt molestie tortor. Auctor duis lorem ultrices malesuada scelerisque...",
      time: "3 hours",
      author: "Chigox",
      src: img1,
    },
    {
      title: "Different Strokes: Same old story saved by good casting",
      description:
        "Lorem ipsum dolor sit amet consectetur. Bibendum ornare velit elementum tortor mattis. Lorem ipsum ut vel nunc curabitur tempus dui magna morbi. Suspendisse consectetur a proin fermentum tincidunt molestie tortor. Auctor duis lorem ultrices malesuada scelerisque...",
      time: "3 hours",
      author: "Chigox",
      src: img1,
    },
    {
      title: "Different Strokes: Same old story saved by good casting",
      description:
        "Lorem ipsum dolor sit amet consectetur. Bibendum ornare velit elementum tortor mattis. Lorem ipsum ut vel nunc curabitur tempus dui magna morbi. Suspendisse consectetur a proin fermentum tincidunt molestie tortor. Auctor duis lorem ultrices malesuada scelerisque...",
      time: "3 hours",
      author: "Chigox",
      src: img1,
    },
    // Repeat for the other news items
  ];

  const handleSearchFilter = (e) => {
    // console.log(e);
  };

  return (
    <>
      <MainSearchFilterBar searchedSection={(e) => handleSearchFilter(e)} />
      <Container>
        <TrendingNews />
        <h1 className={styles.heading1}>Latest News</h1>
        <hr style={{ marginTop: 20, border: "0.5px solid #000" }} />
        {newsData.map((news, index) => (
          <NewsItem
            key={index}
            title={news.title}
            description={news.description}
            time={news.time}
            author={news.author}
            src={news.src}
          />
        ))}
        <div className="text-center" style={{ marginBottom: 40 }}>
          <Button className={styles.seeMoreBtn}>See more</Button>
        </div>
      </Container>
    </>
  );
};

export default NewsComponent;
