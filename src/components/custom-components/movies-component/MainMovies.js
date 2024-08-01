import { Button, Container } from "react-bootstrap";
import classes from "./MainMovies.module.css";
import CompleteSearchFilterBar from "@/components/general-components/CompleteSearchFilter";
import HorRecommendation from "@/components/general-components/HorRecommendation";

// Util function for converting string to url-like and vice versa
import { convertStringToKebabCase } from "@/utils/url-encoding";

const MainMovies = () => {
  return (
    <Container>
      <CompleteSearchFilterBar placeholder="movies" />
      <section style={{ marginBottom: 50 }}>
        <HorRecommendation
          title="Top Rated Movies"
          to={`/movies/list?caterogy=${convertStringToKebabCase(
            "Top Rated Movies"
          )}`}
        />
        <HorRecommendation
          title="Most Popular Movies in Nigeria 2024"
          to={`/movies/list?caterogy=${convertStringToKebabCase(
            "Most Popular Movies in Nigeria 2024"
          )}`}
        />
        <HorRecommendation
          title="Best Movies of 2024"
          to={`/movies/list?caterogy=${convertStringToKebabCase(
            "Best Movies of 2024"
          )}`}
        />
        <HorRecommendation
          title="Most Popular Hollywood Movies 2024"
          to={`/movies/list?caterogy=${convertStringToKebabCase(
            "Most Popular Hollywood Movies 2024"
          )}`}
        />
        <HorRecommendation
          title="Most Popular Nollywood Movies 2024"
          to={`/movies/list?caterogy=${convertStringToKebabCase(
            "Most Popular Nollywood Movies 2024"
          )}`}
        />
        <HorRecommendation
          title="Movies Based on a True Story"
          to={`/movies/list?caterogy=${convertStringToKebabCase(
            "Movies Based on a True Story"
          )}`}
        />
        <div className="text-center" style={{ marginTop: 40 }}>
          <Button className={classes.seeMoreBtn}>See more</Button>
        </div>
      </section>
    </Container>
  );
};

export default MainMovies;
