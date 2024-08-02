import Image from "next/image";
import { Button, Container } from "react-bootstrap";

import classes from "./ProfileEdit.module.css";

import changeDpIcon from "../../../../../public/images/icons/change-dp.svg";
import dpIimage from "../../../../../public/images/templates-imgs/dp.png";

// Icons here
import emailIcon from "../../../../../public/images/icons/email.svg";
import userNameIcon from "../../../../../public/images/icons/user-profile.svg";

const ProfileEdit = () => {
  return (
    <Container>
      <section>
        <h1 style={{ fontWeight: "bold" }}>Profile</h1>
        <div style={{ position: "relative" }}>
          <Image
            src={dpIimage}
            alt="DP Image"
            className={classes.imgStyle}
            priority
          />
          <Image
            src={changeDpIcon}
            alt="change dp icon"
            priority
            style={{
              position: "absolute",
              left: 65,
              top: 65,
            }}
          />
        </div>
        <div style={{ marginTop: 30 }}>
          <h2 style={{ fontWeight: "bold", fontSize: 25 }}>
            Personal Information
          </h2>
          <section>
            <div style={{ color: "#4C4A48", marginBottom: 7, marginTop: 30 }}>
              Email address
            </div>
            <div
              className="col-12 col-md-6 col-lg-4"
              style={{
                border: "1px solid #A19F9D",
                padding: "8px 10px",
                borderRadius: 10,
              }}
            >
              <div style={{ display: "flex" }}>
                <Image
                  src={emailIcon}
                  alt="Email Icon"
                  priority
                  style={{ marginRight: 10 }}
                />
                nayazubuko@gmail.com
              </div>
            </div>
          </section>
          <section style={{ marginTop: 20 }}>
            <div style={{ color: "#4C4A48", marginBottom: 7 }}>Username</div>
            <div
              className="col-12 col-md-6 col-lg-4"
              style={{
                border: "1px solid #A19F9D",
                padding: "8px 10px",
                borderRadius: 10,
              }}
            >
              <div style={{ display: "flex" }}>
                <Image
                  src={userNameIcon}
                  alt="Profile Icon"
                  priority
                  style={{ marginRight: 10 }}
                />
                nayazubuko
              </div>
            </div>
          </section>
          <section style={{ margin: "50px 0" }}>
            <h2 style={{ fontWeight: "bold", fontSize: 25, marginBottom: 20 }}>
              Password
            </h2>
            <Button
              className={`${classes.changePasswordBtn} col-12 col-md-6 col-lg-4`}
            >
              Change Password
            </Button>
          </section>
          <div style={{ marginBottom: 50 }}>
            <Button
              className={`${classes.saveChangesBtn} col-12 col-md-4 col-lg-3`}
              disabled
            >
              Change Password
            </Button>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default ProfileEdit;
