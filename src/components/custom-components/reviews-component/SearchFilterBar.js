"use client";

import { useRef, useState } from "react";
import { Container, Row, Col, Form, Button, Dropdown } from "react-bootstrap";
import { FiSearch } from "react-icons/fi";
import { CgSortAz } from "react-icons/cg";
import styles from "./SearchFilterBar.module.css";

const SearchFilterBar = (props) => {
  const [showFilters, setShowFilters] = useState(false);
  const searchRef = useRef();

  const handleFilterToggle = () => {
    setShowFilters(!showFilters);
  };

  const handleSearchedSection = (item) => {
    props.searchedSection(item);
    console.log(item);
  };

  return (
    <main className={styles.searchFilterContainer}>
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={7} className="d-flex">
            <div
              style={{
                border: "1.3px solid #ccc",
                width: "100%",
                padding: "10px 10px 10px 2px",
                borderRadius: 10,
              }}
            >
              <Form
                className="flex-grow-1 d-flex align-items-center position-relative"
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <FiSearch
                  className={styles.searchIcon}
                  size={25}
                  color="#888"
                />
                <Form.Control
                  type="search"
                  placeholder="Search all reviews"
                  className={styles.searchInput}
                  ref={searchRef}
                />
                <Button
                  className={styles.searchButton}
                  onClick={() => {
                    if (searchRef.current.value.length === 0) {
                    } else {
                      handleSearchedSection(searchRef.current.value);
                    }
                  }}
                >
                  Search
                </Button>
              </Form>
            </div>
          </Col>
          <Col xs={12} md={5} className="text-md-end text-end mt-3 mt-md-0">
            <Button
              className={styles.filterButtonIcon}
              onClick={handleFilterToggle}
            >
              <span
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {!showFilters && <CgSortAz size={26} />}
                {showFilters ? "X" : "Filters"}
              </span>
            </Button>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={7}>
            {showFilters && (
              <Row className={styles.filterOptions}>
                <Col xs={12} className="d-flex flex-wrap">
                  <Button
                    variant="outline-secondary"
                    className="m-2"
                    onClick={() => handleSearchedSection("movies")}
                  >
                    Movies
                  </Button>
                  <Button
                    variant="outline-secondary"
                    className="m-2"
                    onClick={() => handleSearchedSection("tv-show")}
                  >
                    TV Shows
                  </Button>
                  <Dropdown className="m-2">
                    <Dropdown.Toggle variant="outline-secondary">
                      Genre
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item
                        onClick={() => handleSearchedSection("action")}
                      >
                        Action
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => handleSearchedSection("adventure")}
                      >
                        Adventure
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => handleSearchedSection("comedy")}
                      >
                        Comedy
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => handleSearchedSection("sci-fi")}
                      >
                        Sci-Fi
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => handleSearchedSection("horror")}
                      >
                        Horror
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => handleSearchedSection("drama")}
                      >
                        Drama
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => handleSearchedSection("thriller")}
                      >
                        Thriller
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => handleSearchedSection("fantasy")}
                      >
                        Fantasy
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => handleSearchedSection("romance")}
                      >
                        Romance
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => handleSearchedSection("crime")}
                      >
                        Crime
                      </Dropdown.Item>
                      {/* Add more genres as needed */}
                    </Dropdown.Menu>
                  </Dropdown>
                  <Dropdown className="m-2">
                    <Dropdown.Toggle variant="outline-secondary">
                      Industry
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item
                        onClick={() => handleSearchedSection("nollywood")}
                      >
                        Nollywood
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => handleSearchedSection("hollywood")}
                      >
                        Hollywood
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => handleSearchedSection("bollywood")}
                      >
                        Bollywood
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => handleSearchedSection("k-drama")}
                      >
                        K-Drama
                      </Dropdown.Item>
                      {/* Add more industries as needed */}
                    </Dropdown.Menu>
                  </Dropdown>
                  <Dropdown className="m-2">
                    <Dropdown.Toggle variant="outline-secondary">
                      Streaming Platforms
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item
                        onClick={() => handleSearchedSection("netflix")}
                      >
                        Netflix
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => handleSearchedSection("prime-video")}
                      >
                        Prime Video
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => handleSearchedSection("disney+")}
                      >
                        Disney+
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => handleSearchedSection("showmax")}
                      >
                        ShowMax
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => handleSearchedSection("youtube")}
                      >
                        Youtube
                      </Dropdown.Item>
                      {/* Add more streaming platforms as needed */}
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>
              </Row>
            )}
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default SearchFilterBar;
