import { Container } from "react-bootstrap";
import classes from "./HorizontalScroll.module.css";

// Sample Images
import image1 from "../../../../public/images/templates-imgs/treandingimage1.png";
import image2 from "../../../../public/images/templates-imgs/treandingimage2.png";
import image3 from "../../../../public/images/templates-imgs/treandingimage3.png";
import image4 from "../../../../public/images/templates-imgs/treandingimage4.png";
import Image from "next/image";

const brands = [
  {
    title:
      "A Tribe Called Judah: A comedy that will have you laughing out loud",
    genre: ": Comedy/Crime",
    streamingPlatform: ": Prime Video",
    img: image1,
  },
  {
    title: "Flawsome Series: A series that will make you want for more.",
    genre: ": Drama",
    streamingPlatform: ": Showmax",
    img: image2,
  },
  {
    title: "Breathe of Life: A masterpiece that will leave you in awe.",
    genre: ": Drama",
    streamingPlatform: ": Prime Video",
    img: image3,
  },
  {
    title:
      "Beast of Two Worlds: A thriller that will keep you on the edge of your seat.",
    genre: ": Thriller",
    streamingPlatform: ": Cinemas",
    img: image4,
  },
];

const HorizontalScroll = () => {
  return (
    <Container>
      <main className={classes.bodyContainer}>
        {brands.map((item) => (
          <section
            key={item.title}
            className="col-12 col-sm-12 col-md-6 col-lg-3"
          >
            <div className={classes.cardConatiner}>
              <Image
                src={item.img}
                alt={item.title}
                width="30%"
                height="auto"
                style={{ width: "70%" }}
                priority
              />
              <div
                style={{ textAlign: "left", padding: "0 25px", marginTop: 15 }}
              >
                <h4
                  style={{ fontSize: 18, marginBottom: 20, fontWeight: "bold" }}
                >
                  {item.title}
                </h4>
                <p style={{ fontSize: 12, marginBottom: 0 }}>
                  <span style={{ fontWeight: "bold" }}>Genre</span>
                  {item.genre}
                </p>
                <p style={{ fontSize: 12 }}>
                  <span style={{ fontWeight: "bold" }}>Streaming Platform</span>
                  {item.streamingPlatform}
                </p>
              </div>
            </div>
          </section>
        ))}
      </main>
    </Container>
  );
};

export default HorizontalScroll;
