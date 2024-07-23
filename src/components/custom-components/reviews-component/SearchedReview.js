"use client";

import { Button, Container } from "react-bootstrap";
import classes from "./SearchedReview.module.css";

import { MdArrowBack } from "react-icons/md";
import SingleReviewComponent from "./SingleReview";

import img1 from "../../../../public/images/templates-imgs/showReview1.png";

const data = [
  {
    title: "Different Strokes: Same old story saved by good casting",
    src: img1,
    description:
      "Lorem ipsum dolor sit amet consectetur. Bibendum ornare velit elementum tortor mattis. Lorem ipsum ut vel nunc curabitur tempus dui magna morbi. Suspendisse consectetur a proin fermentum tincidunt molestie tortor. Auctor duis lorem ultrices malesuada scelerisque...",
    author: "Chigoxx",
    date: "May 11, 2024",
    genre: "Drama",
    industry: "Nollywood",
    streamingPlatform: "Prime Video",
  },
  {
    title: "Different Strokes: Same old story saved by good casting",
    src: img1,
    description:
      "Lorem ipsum dolor sit amet consectetur. Bibendum ornare velit elementum tortor mattis. Lorem ipsum ut vel nunc curabitur tempus dui magna morbi. Suspendisse consectetur a proin fermentum tincidunt molestie tortor. Auctor duis lorem ultrices malesuada scelerisque...",
    author: "Chigoxx",
    date: "May 11, 2024",
    genre: "Drama",
    industry: "Nollywood",
    streamingPlatform: "Prime Video",
  },
  {
    title: "Different Strokes: Same old story saved by good casting",
    src: img1,
    description:
      "Lorem ipsum dolor sit amet consectetur. Bibendum ornare velit elementum tortor mattis. Lorem ipsum ut vel nunc curabitur tempus dui magna morbi. Suspendisse consectetur a proin fermentum tincidunt molestie tortor. Auctor duis lorem ultrices malesuada scelerisque...",
    author: "Chigoxx",
    date: "May 11, 2024",
    genre: "Drama",
    industry: "Nollywood",
    streamingPlatform: "Prime Video",
  },
  {
    title: "Different Strokes: Same old story saved by good casting",
    src: img1,
    description:
      "Lorem ipsum dolor sit amet consectetur. Bibendum ornare velit elementum tortor mattis. Lorem ipsum ut vel nunc curabitur tempus dui magna morbi. Suspendisse consectetur a proin fermentum tincidunt molestie tortor. Auctor duis lorem ultrices malesuada scelerisque...",
    author: "Chigoxx",
    date: "May 11, 2024",
    genre: "Drama",
    industry: "Nollywood",
    streamingPlatform: "Prime Video",
  },
];

const SearchedReview = (props) => {
  const handleSearchFilter = () => {
    props.handleGoBack("");
  };

  let title = props.title;

  if (title == "movies") {
    title = "Movies Reviews";
  } else if (title == "tv-show") {
    title = "TV Show Reviews";
  } else if (title == "action") {
    title = "Action Genre Reviews";
  } else if (title == "adventure") {
    title = "Adventure Genre Reviews";
  } else if (title == "comedy") {
    title = "Comedy Genre Reviews";
  } else if (title == "sci-fi") {
    title = "Sci-fi Genre Reviews";
  } else if (title == "horror") {
    title = "Horror Genre Reviews";
  } else if (title == "drama") {
    title = "Drama Genre Reviews";
  } else if (title == "thriller") {
    title = "Thriller Genre Reviews";
  } else if (title == "fantasy") {
    title = "Fantasy Genre Reviews";
  } else if (title == "romance") {
    title = "Romance Genre Reviews";
  } else if (title == "crime") {
    title = "Crime Genre Reviews";
  } else if (title == "nollywood") {
    title = "Nollywood Reviews";
  } else if (title == "hollywood") {
    title = "Hollywood Reviews";
  } else if (title == "bollywood") {
    title = "Bollywood Reviews";
  } else if (title == "k-drama") {
    title = "K-Drama Reviews";
  } else if (title == "netflix") {
    title = "Netflix Reviews";
  } else if (title == "prime-video") {
    title = "Prime-Video Reviews";
  } else if (title == "disney+") {
    title = "Disney+ Reviews";
  } else if (title == "showmax") {
    title = "Showmax Reviews";
  } else if (title == "youtube") {
    title = "Youtube Reviews";
  } else {
    title = `Search Results for "${props.title}"`;
  }

  return (
    <Container>
      <Button onClick={handleSearchFilter} className={classes.goBackBtn}>
        <MdArrowBack size={30} />
      </Button>
      <h2 style={{ marginTop: 30, fontWeight: "bold", fontSize: 30 }}>
        {title}
      </h2>
      <hr style={{ border: "1.4px solid #000" }} />
      <section style={{ marginTop: 30 }}>
        {data.map((item) => (
          <main key={Math.random()} style={{ marginBottom: 20 }}>
            <SingleReviewComponent {...item} />
          </main>
        ))}
      </section>
    </Container>
  );
};

export default SearchedReview;
