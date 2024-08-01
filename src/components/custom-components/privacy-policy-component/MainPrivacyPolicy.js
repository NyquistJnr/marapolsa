import classes from "./MainPrivacyPolicy.module.css";

const MainPrivacyPolicy = () => {
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
          <h2 style={{ fontWeight: "bold", textAlign: "left" }}>
            Privacy Policy
          </h2>
          <h5 style={{ fontWeight: "bold", textAlign: "left", marginTop: 30 }}>
            Introduction
          </h5>
          <p style={{ textAlign: "left", paddingTop: 5 }}>
            At Marapolsa Movies, we are committed to protecting your privacy and
            ensuring that your personal data is handled in accordance with the
            highest standards of security and confidentiality. This Privacy
            Policy explains how we collect, use, and protect your personal data
            when you visit our website or interact with our services.
          </p>
          <h5 style={{ fontWeight: "bold", textAlign: "left", marginTop: 30 }}>
            What Personal Data Do We Collect?
          </h5>
          <div style={{ textAlign: "left", paddingTop: 5 }}>
            We collect personal data from you when you:
            <ul>
              <li>Register for an account on our website</li>
              <li>Leave a comment or review on our website</li>
              <li>Send us an email or contact us through our contact form</li>
              <li>Subscribe to our newsletter or email updates</li>
            </ul>
            The personal data we collect may include:
            <ul>
              <li>Name and email address</li>
              <li>IP address</li>
              <li>
                Device information (e.g. browser type, operating system, device
                type)
              </li>
              <li>Geographic location (e.g. country, region, city)</li>
              <li>
                Information about your movie preferences and viewing habits
              </li>
            </ul>
          </div>
          <h5 style={{ fontWeight: "bold", textAlign: "left", marginTop: 30 }}>
            How Do We Use Your Personal Data
          </h5>
          <div style={{ textAlign: "left", paddingTop: 5 }}>
            We use your personal data for the following purposes:
            <ul>
              <li>
                To provide you with the services you request (e.g. registering
                for an account, sending you emails)
              </li>
              <li>
                To improve our website and services (e.g. understanding your
                movie preferences, improving our recommendations)
              </li>
              <li>
                To provide you with targeted advertising and marketing (e.g.
                showing you ads that are relevant to your movie preferences)
              </li>
              <li>
                To comply with legal requirements (e.g. data retention laws)
              </li>
            </ul>
          </div>
          <h5 style={{ fontWeight: "bold", textAlign: "left", marginTop: 30 }}>
            How Do We Collect Your Personal Data
          </h5>
          <div style={{ textAlign: "left", paddingTop: 5 }}>
            We take the security and confidentiality of your personal data very
            seriously. We have implemented robust security measures to protect
            your data from unauthorized access, use, disclosure, or destruction.
            These measures include:
            <ul>
              <li>Encryption of sensitive data</li>
              <li>Secure servers and databases</li>
              <li>Regular backups and disaster recovery procedures</li>
              <li>Employee training and compliance programs</li>
            </ul>
          </div>
          <h5 style={{ fontWeight: "bold", textAlign: "left", marginTop: 30 }}>
            How Long Do We Keep Your Data
          </h5>
          <p style={{ textAlign: "left", paddingTop: 5 }}>
            We retain your personal data for as long as necessary to fulfill the
            purposes for which it was collected. We will also retain your
            personal data for as long as required by law or regulation.
          </p>
          <h5 style={{ fontWeight: "bold", textAlign: "left", marginTop: 30 }}>
            Your Rights & Choices
          </h5>
          <div style={{ textAlign: "left", paddingTop: 5 }}>
            You have the right to:
            <ul>
              <li>Request access to your personal data</li>
              <li>Request correction or updating of your personal data</li>
              <li>Request erasure of your personal data</li>
              <li>Object to the processing of your personal data</li>
              <li>
                Request restriction of the processing of your personal data
              </li>
              <li>Request transfer of your personal data</li>
            </ul>
            You can exercise these rights by contacting us at [Your Email
            Address] or by using our contact form.
          </div>
          <h5 style={{ fontWeight: "bold", textAlign: "left", marginTop: 30 }}>
            Changes To This Privacy POlicy
          </h5>
          <p style={{ textAlign: "left", paddingTop: 5 }}>
            We reserve the right to modify this Privacy Policy at any time
            without notice. We will post any changes on this page and will
            notify you by email if we make significant changes.
          </p>
          <h5 style={{ fontWeight: "bold", textAlign: "left", marginTop: 30 }}>
            How To Share Your Concerns
          </h5>
          <div style={{ textAlign: "left", paddingTop: 5 }}>
            If you have any questions or concerns about this Privacy Policy or
            how we handle your personal data, please
            <ul>
              <li>Contact us at contact@marapolsamovies.com or,</li>
              <li>By using our contact form.</li>
            </ul>
            By accessing or using our website, you agree to be bound by this
            Privacy Policy.
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainPrivacyPolicy;
