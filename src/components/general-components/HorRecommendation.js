import { Container } from "react-bootstrap";
import HorizontalScroll from "@/components/basic-ui/horizontal-scroll/HorizontalScroll";
import Link from "next/link";

import classes from "./HorRecommendation.module.css";

const HorRecommendation = (props) => {
  return (
    <section>
      <Container>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            margin: "30px 0",
            flexWrap: "wrap",
          }}
        >
          <h4 className="py-2" style={{ fontWeight: "bold" }}>
            {props.title}
          </h4>
          <p className={`${classes.seeMoreLink} py-2`}>
            <Link href={props.to ? props.to : "#"}>See more</Link>
          </p>
        </div>
        <hr style={{ marginBottom: 20, marginTop: -15 }} />
        <HorizontalScroll />
      </Container>
    </section>
  );
};

export default HorRecommendation;
