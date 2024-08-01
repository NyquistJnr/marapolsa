import AdvertisementForm from "./AdvertisementForm";
import classes from "./MainAdvertisewithUs.module.css";

const MainAdvertisewithUs = () => {
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
          <h3 style={{ fontWeight: "bold", textAlign: "left" }}>
            Advertise with Us
          </h3>
          <p style={{ textAlign: "left", paddingTop: 5 }}>
            Are you looking for a unique and targeted way to reach your
            audience? Look no further than Marapolsa Movies!
          </p>
          <p style={{ textAlign: "left" }}>
            As a leading movie review website, we offer a range of advertising
            options to help you reach your marketing goals. Our website is
            visited by thousands of movie lovers every month, providing a
            valuable opportunity to reach your target audience.
          </p>
          <h3 style={{ paddingTop: 30, fontWeight: "bold", textAlign: "left" }}>
            Why Advertise with Us?
          </h3>
          <ul style={{ textAlign: "left" }}>
            <li>
              High-quality content: Our website is dedicated to providing
              in-depth reviews and analysis of the latest movies, making it an
              ideal platform for advertisers to reach their target audience.
            </li>
            <li>
              Targeted audience: Our users are passionate about movies and are
              actively seeking out new films to watch. This means that they are
              more likely to be interested in your products or services.
            </li>
            <li>
              Effective advertising: Our advertising options are designed to be
              effective and cost-efficient, with a range of options to suit your
              marketing budget.
            </li>
          </ul>
          <h3 style={{ fontWeight: "bold", textAlign: "left" }}>
            Advertising Options
          </h3>
          <p style={{ textAlign: "left" }}>
            We offer a range of advertising options to help you reach your
            marketing goals. Choose from the following options:
          </p>
          <p style={{ textAlign: "left" }}>
            <b>Leaderboard Ads:</b> Display your ad at the top of our website,
            where it will be seen by thousands of visitors every month.
          </p>
          <p style={{ textAlign: "left" }}>
            <b>Sidebar Ads:</b> Place your ad on the side of our website, where
            it will be seen by visitors as they browse through our content.
          </p>
          <p style={{ textAlign: "left" }}>
            <b>Sponsored Content:</b> Partner with us to create sponsored
            content that aligns with your brand and messaging.
          </p>
          <p style={{ textAlign: "left" }}>
            <b>Video Ads:</b> Reach our audience with video ads that can be
            displayed on our website or on our social media channels.
          </p>
          <h3 style={{ fontWeight: "bold", textAlign: "left" }}>
            Ad Specifications
          </h3>
          <p style={{ textAlign: "left" }}>
            To ensure that your ad is effective, we have specific requirements
            for ad size, format, and content.
          </p>
          <h3 style={{ fontWeight: "bold", textAlign: "left" }}>Pricing</h3>
          <p style={{ textAlign: "left" }}>
            We offer competitive pricing for our advertising options.
          </p>
          <h3 style={{ fontWeight: "bold", textAlign: "left" }}>Contact Us</h3>
          <p style={{ textAlign: "left" }}>
            If you&apos;re interested in advertising with us, please don&apos;t
            hesitate to contact us. We&apos;d be happy to discuss your marketing
            goals and provide a customized solution to help you reach your
            target audience.
          </p>
          <div style={{ textAlign: "left" }}>
            <AdvertisementForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainAdvertisewithUs;
