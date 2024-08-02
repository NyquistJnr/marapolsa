import Link from "next/link";
import Image from "next/image";
import { Container } from "react-bootstrap";

import classes from "./MainProfile.module.css";

import img1 from "../../../../public/images/templates-imgs/dp.png";
import ProfileTabs from "./ProfileTabs";

const MainProfile = () => {
  return (
    <Container>
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "50px 0",
        }}
      >
        <div
          style={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Image
            src={img1}
            alt="DP Image"
            className={classes.imgStyle}
            priority
          />
          <div style={{ marginTop: 20, fontWeight: "bold", fontSize: 20 }}>
            nayazubuko
          </div>
          <div style={{ marginBottom: 10, fontSize: 13 }}>
            nayazubuko@gmail.com
          </div>
          <Link href="/profile/edit" className={`${classes.editBtn} btn`}>
            Edit Profile
          </Link>
        </div>
      </section>
      <section style={{ marginTop: 20 }}>
        <ProfileTabs />
      </section>
    </Container>
  );
};

export default MainProfile;
