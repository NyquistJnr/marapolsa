import Image from "next/image";
import styles from "./page.module.css";
import { Container } from "react-bootstrap";
import HorizontalScroll from "@/components/basic-ui/horizontal-scroll/HorizontalScroll";
import LastestList from "@/components/custom-components/home-component/LastestList";
import PopularList from "@/components/custom-components/home-component/PopularList";

// Images Needed
import img from "../../public/images/templates-imgs/treandingimage1.png";
import img2 from "../../public/images/templates-imgs/treandingimage2.png";
import img3 from "../../public/images/templates-imgs/treandingimage3.png";
import img4 from "../../public/images/templates-imgs/treandingimage4.png";
import lastestImg1 from "../../public/images/templates-imgs/lastest-img1.png";
import lastestImg2 from "../../public/images/templates-imgs/lastest-img2.png";
import lastestImg3 from "../../public/images/templates-imgs/lastest-img3.png";
import popularImg1 from "../../public/images/templates-imgs/popular-img1.png";
import popularImg2 from "../../public/images/templates-imgs/popular-img2.png";
import popularImg3 from "../../public/images/templates-imgs/popular-img3.png";
import movieTvShowImg from "../../public/images/templates-imgs/tvshow.png";
import movieTvShowImg1 from "../../public/images/templates-imgs/lastest-img.png";
import movieTvShowImg2 from "../../public/images/templates-imgs/lastest-img3.png";
import NewsList from "@/components/custom-components/home-component/news-components/NewsList";
import MovieTvShowList from "@/components/custom-components/home-component/movie-tvshows-components/MovieTvShowList";
import JoinConversation from "@/components/custom-components/join-conversation/JoinConversation";
import Unwrapped from "@/components/custom-components/unwrapped-component/Unwrapped";

const data1 = [
  {
    src: lastestImg1,
    title: "Different Strokes: Same old story saved by good casting",
    description:
      "Lorem ipsum dolor sit amet consectetur. Bibendum ornare velit elementum tortor mattis....",
    author: "Chigoxx",
    time: "May 11, 2024",
    genre: "Drama",
    platform: "Prime Video",
  },
  {
    src: lastestImg2,
    title:
      "A Tribe Called Judah: A comedy that will have you laughing out loud",
    description:
      "Lorem ipsum dolor sit amet consectetur. Bibendum ornare velit elementum tortor mattis....",
    author: "Chigoxx",
    time: "May 11, 2024",
    genre: "Comedy/Crime",
    platform: "Prime Video",
  },
  {
    src: lastestImg3,
    title: "Breathe of Life: A masterpiece that will leave you in awe.",
    description:
      "Lorem ipsum dolor sit amet consectetur. Bibendum ornare velit elementum tortor mattis....",
    author: "Chigoxx",
    time: "May 11, 2024",
    genre: "Drama",
    platform: "Prime Video",
  },
];

const data2 = [
  {
    src: popularImg1,
    title: "Flawsome Series: A series that will make you want for more.",
    time: "May 11, 2024",
    identity: "Review",
  },
  {
    src: popularImg2,
    title: "Breathe of Life: A masterpiece that will leave you in awe.",
    time: "May 11, 2024",
    identity: "News",
  },
  {
    title: "Different Strokes",
    time: "May 11, 2024",
    src: popularImg3,
    identity: "Movies",
  },
];

const data3 = [
  {
    title: "Lorem ipsum dolor sit amet consectetur.",
    author: "Chigoxx",
    description:
      "Lorem ipsum dolor sit amet consectetur. Bibendum ornare velit elementum tortor mattis. Lorem ipsum ut...",
    src: popularImg3,
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur.",
    author: "Chigoxx",
    description:
      "Lorem ipsum dolor sit amet consectetur. Bibendum ornare velit elementum tortor mattis. Lorem ipsum ut...",
    src: popularImg3,
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur.",
    author: "Chigoxx",
    description:
      "Lorem ipsum dolor sit amet consectetur. Bibendum ornare velit elementum tortor mattis. Lorem ipsum ut...",
    src: popularImg3,
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur.",
    author: "Chigoxx",
    description:
      "Lorem ipsum dolor sit amet consectetur. Bibendum ornare velit elementum tortor mattis. Lorem ipsum ut...",
    src: popularImg3,
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur.",
    author: "Chigoxx",
    description:
      "Lorem ipsum dolor sit amet consectetur. Bibendum ornare velit elementum tortor mattis. Lorem ipsum ut...",
    src: popularImg3,
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur.",
    author: "Chigoxx",
    description:
      "Lorem ipsum dolor sit amet consectetur. Bibendum ornare velit elementum tortor mattis. Lorem ipsum ut...",
    src: popularImg3,
  },
];

const data4 = [
  {
    src: movieTvShowImg1,
    title: "Beast of Two Worlds",
    description:
      "Lorem ipsum dolor sit amet consectetur. Bibendum ornare velit elementum tortor mattis...",
    author: "Chigoxx",
    time: "12 April, 2024",
    genre: "Action, Sci-fi | Hollywood",
    platform: "Netflix",
  },
  {
    src: movieTvShowImg2,
    title: "Beast of Two Worlds",
    description:
      "Lorem ipsum dolor sit amet consectetur. Bibendum ornare velit elementum tortor mattis...",
    author: "Chigoxx",
    time: "12 April, 2024",
    genre: "Action, Sci-fi | Hollywood",
    platform: "Netflix",
  },
  {
    src: img,
    title: "Beast of Two Worlds",
    description:
      "Lorem ipsum dolor sit amet consectetur. Bibendum ornare velit elementum tortor mattis...",
    author: "Chigoxx",
    time: "12 April, 2024",
    genre: "Action, Sci-fi | Hollywood",
    platform: "Netflix",
  },
  {
    src: movieTvShowImg,
    title: "Beast of Two Worlds",
    description:
      "Lorem ipsum dolor sit amet consectetur. Bibendum ornare velit elementum tortor mattis...",
    author: "Chigoxx",
    time: "12 April, 2024",
    genre: "Action, Sci-fi | Hollywood",
    platform: "Netflix",
  },
];

export default function Home() {
  return (
    <Container>
      <h1 style={{ fontWeight: "bold", marginTop: 20 }}>Trending Reviews</h1>
      <hr style={{ border: "1px solid #000", marginBottom: 20 }} />
      <HorizontalScroll />
      <div style={{ marginTop: 50 }}>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-7 col-lg-8 py-3">
            <LastestList data={data1} name="Lastest" />
          </div>
          <div className="col-12 col-sm-12 col-md-5 col-lg-4 py-3">
            <PopularList data={data2} name="Most Popular" />
          </div>
        </div>
      </div>
      {/* Start of New Section */}
      <NewsList data={data3} name="News" />
      {/* Start of New Section */}
      <MovieTvShowList data={data4} name="Movies & TV Shows" />

      {/* Start of New Section */}
      <JoinConversation />
      {/* Start of New Section */}
      <Unwrapped />
    </Container>
  );
}
