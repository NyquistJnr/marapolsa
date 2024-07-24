// pages/index.js

import NewsItem from "./SingleLastestNews";
import styles from "./NewsComponent.module.css";
import { Container } from "react-bootstrap";

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
    // Repeat for the other news items
  ];

  return (
    <Container>
      <h1 className={styles.heading1}>Latest News</h1>
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
    </Container>
  );
};

export default NewsComponent;
