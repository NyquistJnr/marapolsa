import Image from "next/image";

import classes from "./TrendingNews.module.css";

// Template Image
import img1 from "../../../../public/images/templates-imgs/popular-img3.png";

const trendingNewsData = [
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

const TrendingNews = () => {
  return (
    <div>
      <h1>Trending News</h1>
      <hr style={{ marginTop: 4, border: "1px solid #000" }} />
      <div className="row">
        {trendingNewsData.map((trendingNews) => (
          <div
            className="col-12 col-sm-12 col-md-6 col-lg-4 py-3"
            key={Math.random()}
          >
            <Image
              src={trendingNews.src}
              className={classes.imgStyle}
              alt={trendingNews.title}
              priority
            />
            <h3 className={classes.heading1}>{trendingNews.title}</h3>
            <div className={classes.authorSection}>
              By <b>{trendingNews.author}</b>
            </div>
            <div className={classes.description}>
              {trendingNews.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingNews;
