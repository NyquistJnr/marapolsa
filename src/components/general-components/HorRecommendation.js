import { Container } from "react-bootstrap";
import HorizontalScroll from "@/components/basic-ui/horizontal-scroll/HorizontalScroll";

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
          }}
        >
          <h4 style={{ fontWeight: "bold" }}>{props.title}</h4>
          <p>See more</p>
        </div>
        <hr style={{ marginBottom: 20, marginTop: -15 }} />
        <HorizontalScroll />
      </Container>
    </section>
  );
};

export default HorRecommendation;
