import { Suspense } from "react";
import MoviesList from "@/components/custom-components/movies-component/MoviesList";

const MovieListPage = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <MoviesList />
    </Suspense>
  );
};

export default MovieListPage;
