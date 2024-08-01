import CommentShare from "@/components/general-components/CommentShare";
import MainSearchFilterBar from "@/components/general-components/MainSearchFilter";
import { Container } from "react-bootstrap";
import TrendingNews from "../news-component/TrendingNews";

const AwardsComponents = () => {
  return (
    <Container>
      <MainSearchFilterBar placeholder="awards" />
      <section>
        <h2 style={{ fontWeight: "bold", fontSize: 35 }} className="col-md-6">
          Past Winners of the Marapolsa Awards 2023 Edition
        </h2>
        <div style={{ marginTop: 30 }}>
          <b>Published:</b> 3 hours ago
        </div>
        <div>
          The nominees for the awards were carefully selected by the Marapolsa
          Editorial team from our reviews of movies in 2023. The winners were
          then determined by a fan vote on our Instagram page, where viewers
          cast their ballots in the comments section
        </div>
        <div style={{ marginTop: 30, marginBottom: 30 }}>
          <div>
            <b>Best Producer of the Year:</b> Funke Akindele (She Must Be
            Obeyed)
          </div>
          <div>
            <b>Villain of the Year:</b> Ogundiji (Jagun Jagun: The Warrior)
          </div>
          <div>
            <b>Hollywood Movie of the Year:</b> Fair Play
          </div>
          <div>
            <b>Director of the Year:</b> Biodun Stephen (Big Love)
          </div>
          <div>
            <b>Series of the Year:</b> The Men&apos;s Club
          </div>
          <div>
            <b>Nollywood Movie of the Year:</b> A Tribe Called Judah
          </div>
          <div>
            <b>Female Actor of the Year:</b> Kehinde Bankole (Sista)
          </div>
          <div>
            <b>Male Actor of the Year:</b> Stan Nze (Afamefuna)
          </div>
          <div>
            <b>Reality Award of the Year (BBNaija & RHOL):</b> Cynthia “CeeC”
            Nwadiora (BBNaija)
          </div>
        </div>
      </section>
      <CommentShare />
      <TrendingNews title="Recommended News" />
    </Container>
  );
};

export default AwardsComponents;
