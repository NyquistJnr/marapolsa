"use client";

import { useState } from "react";
import { Button, Container } from "react-bootstrap";

import ReviewPack from "./ReviewPack";
import SearchFilterBar from "./SearchFilterBar";
import SearchedReview from "./SearchedReview";

import classes from "./MainComponent.module.css";

const ReviewComponent = () => {
  const [sumbitSearch, setSumbitSearch] = useState("");

  const handleSearchFilter = (e) => {
    console.log(e);
    setSumbitSearch(e);
  };
  return (
    <>
      <SearchFilterBar searchedSection={(e) => handleSearchFilter(e)} />
      {!!!sumbitSearch ? (
        <>
          <div style={{ marginBottom: 50 }}>
            <ReviewPack title="Trending Reviews" />
          </div>
          <div style={{ marginBottom: 50 }}>
            <ReviewPack title="Latest Reviews" />
          </div>
          <div style={{ marginBottom: 50 }}>
            <ReviewPack title="Most Liked Reviews" />
          </div>
          <div style={{ marginBottom: 50 }}>
            <ReviewPack title="Movies Reviews" />
          </div>
          <div style={{ marginBottom: 50 }}>
            <ReviewPack title="TV Shows Reviews" />
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
