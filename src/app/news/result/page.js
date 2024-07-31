import { Suspense } from "react";
import SingleNews from "@/components/custom-components/news-component/SingleNews";

const NewsResultPage = () => {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <SingleNews />
    </Suspense>
  );
};

export default NewsResultPage;
