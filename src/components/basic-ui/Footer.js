"use client";

import React from "react";
import Image from "next/image";
import { Button, Container, Form } from "react-bootstrap";

import classes from "./Footer.module.css";

// Logo here
import whiteLogo from "../../../public/images/logos/logo-all-white.png";

import emailImage from "../../../public/images/icons/sms.svg";
import profileImage from "../../../public/images/icons/profile.svg";

import icon1 from "../../../public/images/icons/x.svg";
import icon2 from "../../../public/images/icons/instagram.svg";
import icon3 from "../../../public/images/icons/tiktok.svg";
import icon4 from "../../../public/images/icons/youtube.svg";
import icon5 from "../../../public/images/icons/facebook.svg";

const Footer = () => {
  const [year, setYear] = React.useState("");
  React.useEffect(() => {
    const newDate = new Date();
    const c = setInterval(() => {
      setYear((prevState) => newDate.getFullYear());
      // console.log("Changed!");
    }, 1000);
    return () => clearInterval(c);
  }, [year]);

  const [email, setEmail] = React.useState("");
  const [firstName, setFirstName] = React.useState("");

  const handleChange = (e, field) => {
    if (field === "email") {
      setEmail(e.target.value);
    } else if (field === "firstName") {
      setFirstName(e.target.value);
    }
  };

  const handleBlur = (field) => {
    // Add any additional onBlur logic here if needed
  };

  const handleFocus = (field) => {
    // Add any additional onFocus logic here if needed
  };

  return (
    <footer
      style={{
        backgroundColor: "#E86C44",
        padding: "60px 0 30px 0",
        color: "#fff",
      }}>
      <Container>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6">
            <div className="col-lg-8">
              <h5>Stay in the know!</h5>
              <p>
                Sign up for our newsletter for exclusive movie reviews and
                updates. Join now!
              </p>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <div className={`${classes["email-parent"]} mb-3`}>
                    <Image
                      src={emailImage}
                      className={classes["email-icon"]}
                      priority
                      alt="email Icon"
                    />
                    <Form.Control
                      type="email"
                      placeholder="enter your email address"
                      className={classes.inputSpace}
                      style={{
                        height: 50,
                        paddingLeft: 40,
                      }}
                      required
                      value={email}
                      onChange={(e) => handleChange(e, "email")}
                      onBlur={() => handleBlur("email")}
                      onFocus={() => handleFocus("email")}
                    />
                  </div>
                </Form.Group>
                <Form.Group controlId="firstName">
                  <div className={`${classes["email-parent"]} mb-3`}>
                    <Image
                      src={profileImage}
                      className={classes["email-icon"]}
                      priority
                      alt="person Icon"
                    />
                    <Form.Control
                      type="text"
                      placeholder="enter your first name"
                      className={classes.inputSpace}
                      style={{
                        height: 50,
                        paddingLeft: 40,
                      }}
                      required
                      value={firstName}
                      onChange={(e) => handleChange(e, "firstName")}
                      onBlur={() => handleBlur("firstName")}
                      onFocus={() => handleFocus("firstName")}
                    />
                  </div>
                </Form.Group>
                <Button className={classes.subscribeBtn}>Subscribe</Button>
              </Form>
            </div>
          </div>
          <div
            className="col-12 col-sm-12 col-md-6 col-lg-6"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "end",
                justifyContent: "space-between",
              }}>
              <Image
                src={whiteLogo}
                alt="Marapolsa White Logo"
                width={180}
                height="auto"
                priority
              />
              <p style={{ marginTop: 20 }}>
                Copyright &#169;{" "}
                {year ? <span>{year}</span> : <span>Loading...</span>}. All
                rights reserved.
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                }}
                className={classes.iconWidth}>
                <Image
                  src={icon1}
                  priority
                  style={{ width: 26, height: "auto" }}
                  alt="X"
                />
                <Image
                  src={icon2}
                  priority
                  style={{ width: 30, height: "auto" }}
                  alt="Instagram"
                />
                <Image
                  src={icon3}
                  priority
                  style={{ width: 30, height: "auto" }}
                  alt="Tiktok"
                />
                <Image
                  src={icon4}
                  priority
                  style={{ width: 33, height: "auto" }}
                  alt="Youtube"
                />
                <Image
                  src={icon5}
                  priority
                  style={{ width: 33, height: "auto" }}
                  alt="Facebook"
                />
              </div>
            </div>
            <div
              style={{
                fontSize: 14,
                display: "flex",
                justifyContent: "space-evenly",
                width: "100%",
                marginTop: 30,
              }}>
              <p style={{ textAlign: "center" }}>Contact Us</p>
              <p style={{ textAlign: "center" }}>Advertise with us</p>
              <p style={{ textAlign: "center" }}>Privacy Policy</p>
              <p style={{ textAlign: "center" }}>Terms & Conditions</p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
