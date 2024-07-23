import JoinConversation from "@/components/custom-components/join-conversation/JoinConversation";
import Unwrapped from "@/components/custom-components/unwrapped-component/Unwrapped";

import classes from "./page.module.css";

const About = () => {
  const isLoggedIn = true;
  return (
    <div>
      <section
        style={{
          textAlign: "center",
          padding: "5% 0",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        className={classes["background-container"]}
      >
        <div className={classes.size}>
          <h3 style={{ fontWeight: "bold" }}>Welcome to Marapolsa</h3>
          <p style={{ textAlign: "left", paddingTop: 50 }}>
            Marapolsa is a movie review brand that&apos;s passionate about
            sharing our love for movies with the world. Founded in July 2023,
            we&apos;re a team of movie enthusiasts who believe that movies have
            the power to inspire, entertain, and bring people together.
          </p>
          <h3 style={{ paddingTop: 30, fontWeight: "bold" }}>Our Mission</h3>
          <p style={{ textAlign: "left", paddingTop: 30 }}>
            At Marapolsa, we&apos;re committed to providing honest and
            informative reviews of the latest movies. We believe that every
            movie deserves to be seen and reviewed, regardless of its genre,
            budget, or production value. Our mission is to help our audience
            make informed decisions about what movies to watch and to provide a
            platform for filmmakers to share their work with the world.
          </p>
        </div>
      </section>
      <section
        style={{
          textAlign: "center",
          background: "white",
          padding: "5% 0",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className={classes.size}>
          <h3 style={{ fontWeight: "bold" }}>Our Team</h3>
          <p style={{ textAlign: "left", paddingTop: 30, paddingBottom: 40 }}>
            Our team consists of movie enthusiasts from diverse backgrounds,
            including film students, professionals, and critics. We come from
            different parts of the world, but we&apos;re united by our passion
            for movies. Our team is dedicated to providing high-quality reviews,
            interviews, and features that showcase our love for movies.
          </p>
          <h3 style={{ fontWeight: "bold" }}>What Sets Us Apart</h3>
          <p style={{ textAlign: "left", paddingTop: 40 }}>
            At Marapolsa, we&apos;re not just about reviewing movies –
            we&apos;re about creating a community of like-minded individuals who
            share our passion for movies. We believe that every movie has its
            own unique story to tell, and we&apos;re committed to sharing those
            stories with our audience.
          </p>
        </div>
      </section>
      {!isLoggedIn && <JoinConversation />}
      <Unwrapped />
    </div>
  );
};

export default About;
