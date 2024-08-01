"use client";

import { useState } from "react";
import { Button } from "react-bootstrap";

import SearchedReview from "./SearchedReview";
import HorRecommendation from "@/components/general-components/HorRecommendation";

import classes from "./MainComponent.module.css";
import CompleteSearchFilterBar from "@/components/general-components/CompleteSearchFilter";

const ReviewComponent = () => {
  const [sumbitSearch, setSumbitSearch] = useState("");

  const handleSearchFilter = (e) => {
    // console.log(e);
    setSumbitSearch(e);
  };
  return (
    <>
      <CompleteSearchFilterBar searchedSection={(e) => handleSearchFilter(e)} />
      {!!!sumbitSearch ? (
        <>
          <div style={{ marginBottom: 50 }}>
            <HorRecommendation title="Trending Reviews" />
          </div>
          <div style={{ marginBottom: 50 }}>
            <HorRecommendation title="Latest Reviews" />
          </div>
          <div style={{ marginBottom: 50 }}>
            <HorRecommendation title="Most Liked Reviews" />
          </div>
          <div style={{ marginBottom: 50 }}>
            <HorRecommendation title="Movies Reviews" />
          </div>
          <div style={{ marginBottom: 50 }}>
            <HorRecommendation title="TV Shows Reviews" />
          </div>
          <div className="text-center" style={{ marginBottom: 40 }}>
            <Button className={classes.seeMoreBtn}>See more</Button>
          </div>
        </>
      ) : (
        <>
          <SearchedReview
            title={sumbitSearch}
            handleGoBack={(e) => handleSearchFilter(e)}
          />
        </>
      )}
    </>
  );
};

export default ReviewComponent;
