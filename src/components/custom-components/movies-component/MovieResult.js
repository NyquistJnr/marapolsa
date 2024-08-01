import Image from "next/image";
import { Container } from "react-bootstrap";

import MainSearchFilterBar from "@/components/general-components/MainSearchFilter";
import classes from "./MovieResult.module.css";

import img1 from "../../../../public/images/templates-imgs/moview-result-detail.png";
import img2 from "../../../../public/images/templates-imgs/movie-detail.png";
import HorRecommendation from "@/components/general-components/HorRecommendation";

const castNames = [
  "Funke Akindele as Jedidah Judah",
  "Jide Kene Achufusi as Emeka Judah",
  "Uzee Usman as Adamu Judah",
  "Timini Egbuson as Pere Judah",
  "Tobi Makinde as Shina Judah",
  "Olumide Oworu as Ejiro Judah",
  "Genoveva Umeh as Testimony",
  "Ebele Okaro as Grandma",
  "Uzor Arukwe as Chairman Chigozie Onouha",
  "Nse Ikpe Etim as Collette",
  "Juliana Olayode as Hilda",
  "Fathia Balogun as Mama Caro",
  "Paschaline Alex Okoli as Mummy Michael",
  "Sinmi Hassan as Daddy Michael",
  "Yvonne Jegede as Modupe",
  "Boma Akpore as Deji",
  "Ibrahim Yekini as Itele",
  "Etinosa Idemudia as Blast",
  "Nosa Rex as Jerry",
  "Gregory Ojefua as Pluto",
];

const MovieResult = () => {
  return (
    <Container>
      <MainSearchFilterBar placeholder="movie detail" />
      <section style={{ marginBottom: 50 }}>
        <Image
          src={img1}
          alt="Movie Result Detail"
          className={classes.imgStyle}
          priority
        />
        <div className="d-block d-md-flex" style={{ marginTop: 30 }}>
          <Image
            src={img2}
            alt="Movie Result Detail 2"
            className={classes.imgStyle1}
            priority
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div style={{ marginTop: 20 }}>
              <h3 style={{ fontWeight: "bold" }}>A Tribe Called Judah</h3>
              <p style={{ marginTop: 20 }}>
                Lorem ipsum dolor sit amet consectetur. Bibendum ornare velit
                elementum tortor mattis. Lorem ipsum ut vel nunc curabitur
                tempus dui magna morbi. Suspendisse consectetur a proin
                fermentum tincidunt molestie tortor. Auctor duis lorem ultrices
                malesuada scelerisque. Enim porttitor iaculis aliquet posuere
                in. Gravida tempor tellus sed laoreet commodo eget proin proin.
                Sagittis at blandit cras cras. Bibendum ornare velit elementum
                tortor mattis. Lorem ipsum ut vel nunc curabitur tempus dui
                magna morbi. Suspendisse consectetur a proin fermentum tincidunt
                molestie tortor.
              </p>
            </div>
            <div>
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                <div style={{ marginRight: 10 }} className="py-2">
                  <b>Directed by</b> Jennifer Azubuko
                </div>
                <div style={{ marginRight: 10 }} className="py-2">
                  <b>Produced by</b> Jennifer Azubuko
                </div>
                <div style={{ marginRight: 10 }} className="py-2">
                  <b>Release Date:</b> 12 April, 2024
                </div>
                <div style={{ marginRight: 10 }} className="py-2">
                  <b>Genres:</b> Drama, Romance
                </div>
                <div style={{ marginRight: 10 }} className="py-2">
                  <b>Industry:</b> Hollywood
                </div>
                <div style={{ marginRight: 10 }} className="py-2">
                  <b>Streaming Platform:</b> Netflix
                </div>
              </div>
            </div>
          </div>
        </div>
        <main style={{ marginTop: 40 }}>
          <h5>Cast</h5>
          <hr />
          <ul>
            {castNames.map((data) => (
              <li key={data}>{data}</li>
            ))}
          </ul>
        </main>
        <HorRecommendation title="People Search For" />
      </section>
    </Container>
  );
};

export default MovieResult;
