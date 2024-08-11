"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button, Container, Form } from "react-bootstrap";
import classes from "./ProfileEdit.module.css";
import changeDpIcon from "../../../../../public/images/icons/change-dp.svg";
import dpIimage from "../../../../../public/images/templates-imgs/dp.png";
import emailIcon from "../../../../../public/images/icons/email.svg";
import padlock from "../../../../../public/images/icons/password.svg";
import userNameIcon from "../../../../../public/images/icons/user-profile.svg";
import { Skeleton } from "@chakra-ui/react";
import { useAuth } from "@/context/AuthContext";
import usePasswordToggle from "@/hooks/usePasswordToggle";
import classes1 from "../../sign-in/Login.module.css";

import img1 from "../../../../../public/images/templates-imgs/dp.png";

const ProfileEdit = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dp, setDP] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const [isChangePasswordOn, setIsChangePasswordOn] = useState(false);

  const router = useRouter();
  const { isAuthenticated } = useAuth();
  const [
    PasswordInputType,
    ToggleIcon,
    PasswordInputTypeConfirm,
    ToggleIconConfirm,
    PasswordInputTypeConfirm2,
    ToggleIconConfirm2,
  ] = usePasswordToggle();

  const handleUserProfile = async () => {
    try {
      const response = await fetch("/api/profile/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setName(data?.data?.username);
      setEmail(data?.data?.email_address);
      setDP(data?.data?.profile_picture);
      setCountry(data?.data?.country);
      setGender(data?.data?.gender);
    } catch (error) {
      console.error("Signup failed:", error);
    }
  };

  const validateForm = () => {
    if (
      (name || email || gender || country || currentPassword) && // Checks if any field is filled
      ((newPassword &&
        confirmNewPassword &&
        newPassword === confirmNewPassword) || // Validates password fields if filled
        (!newPassword && !confirmNewPassword)) // Allows submission without new password
    ) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  };

  useEffect(() => {
    handleUserProfile();
  }, []);

  useEffect(() => {
    if (!isAuthenticated) {
      router.replace("/");
      return;
    }
  }, [isAuthenticated]);

  useEffect(() => {
    validateForm();
  }, [
    name,
    email,
    gender,
    country,
    currentPassword,
    newPassword,
    confirmNewPassword,
  ]);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    if (isFormValid) {
      // Proceed with form submission logic, e.g., API call
      console.log("Form submitted successfully");
    } else {
      console.log("Form is invalid");
    }
  };

  return (
    <Container>
      <section>
        <h1 style={{ fontWeight: "bold" }}>Profile</h1>
        <div style={{ position: "relative" }}>
          <Image
            src={dp ? `https://marapolsamovies.onrender.com${dp}` : img1}
            alt={`${name} Image`}
            className={classes.imgStyle}
            priority
            width={200}
            height={200}
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
                {email ? (
                  <span>{email}</span>
                ) : (
                  <Skeleton width="100%">
                    <div>contents wrapped</div>
                  </Skeleton>
                )}
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
                {name ? (
                  <span>{name}</span>
                ) : (
                  <Skeleton width="100%">
                    <div>blah blah blah</div>
                  </Skeleton>
                )}
              </div>
            </div>
          </section>
          <form onSubmit={handleSubmit}>
            <section style={{ marginTop: 20 }}>
              <div style={{ color: "#4C4A48", marginBottom: 7 }}>Gender</div>
              <div
                className="col-12 col-md-6 col-lg-4"
                style={{
                  border: "1px solid #A19F9D",
                  padding: "4px 10px",
                  borderRadius: 10,
                }}
              >
                <Form.Select
                  aria-label="Default select example"
                  className={classes.genderField}
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option>Select</option>
                  <option value="MALE">Male</option>
                  <option value="FEMALE">Female</option>
                </Form.Select>
              </div>
            </section>
            <section style={{ marginTop: 20 }}>
              <Form.Label style={{ color: "#4C4A48", marginBottom: 7 }}>
                Country
              </Form.Label>
              <div
                className="col-12 col-md-6 col-lg-4"
                style={{
                  border: "1px solid #A19F9D",
                  padding: "6px 10px",
                  borderRadius: 10,
                }}
              >
                <Form.Control
                  className={classes.genderField}
                  type="text"
                  placeholder="Enter your country e.g. Nigeria"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                />
              </div>
            </section>
            <h2
              style={{
                fontWeight: "bold",
                fontSize: 25,
                marginBottom: 20,
                marginTop: 30,
              }}
            >
              Password
            </h2>
            {isChangePasswordOn && (
              <>
                <section className="col-12 col-md-6 col-lg-4">
                  <Form.Group controlId="currentPassword">
                    <Form.Label>Current Password</Form.Label>
                    <div className={`${classes1["email-parent"]} mb-3`}>
                      <Image
                        src={padlock}
                        className={classes1["email-icon"]}
                        priority
                        alt="Padlock Icon"
                      />
                      <span className={classes1["pass-icon"]}>
                        {ToggleIcon}
                      </span>
                      <Form.Control
                        type={PasswordInputType}
                        placeholder="Enter your current password"
                        className={`${classes1.inputSpace} ${classes1.inputSpace1}`}
                        style={{
                          height: 50,
                          paddingLeft: 40,
                          paddingRight: 40,
                        }}
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                        required
                      />
                    </div>
                  </Form.Group>
                </section>
                <section className="col-12 col-md-6 col-lg-4">
                  <Form.Group controlId="newPassword">
                    <Form.Label>New Password</Form.Label>
                    <div className={`${classes1["email-parent"]} mb-3`}>
                      <Image
                        src={padlock}
                        className={classes1["email-icon"]}
                        priority
                        alt="Padlock Icon"
                      />
                      <span className={classes1["pass-icon"]}>
                        {ToggleIconConfirm}
                      </span>
                      <Form.Control
                        type={PasswordInputTypeConfirm}
                        placeholder="Enter your new password"
                        className={`${classes1.inputSpace} ${classes1.inputSpace1}`}
                        style={{
                          height: 50,
                          paddingLeft: 40,
                          paddingRight: 40,
                        }}
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        required
                      />
                    </div>
                  </Form.Group>
                </section>
                <section className="col-12 col-md-6 col-lg-4">
                  <Form.Group controlId="reNewPassword">
                    <Form.Label>Confirm New Password</Form.Label>
                    <div className={`${classes1["email-parent"]} mb-3`}>
                      <Image
                        src={padlock}
                        className={classes1["email-icon"]}
                        priority
                        alt="Padlock Icon"
                      />
                      <span className={classes1["pass-icon"]}>
                        {ToggleIconConfirm2}
                      </span>
                      <Form.Control
                        type={PasswordInputTypeConfirm2}
                        placeholder="Confirm your new password"
                        className={`${classes1.inputSpace} ${classes1.inputSpace1}`}
                        style={{
                          height: 50,
                          paddingLeft: 40,
                          paddingRight: 40,
                        }}
                        value={confirmNewPassword}
                        onChange={(e) => setConfirmNewPassword(e.target.value)}
                        required
                      />
                    </div>
                  </Form.Group>
                </section>
              </>
            )}
            <section style={{ margin: "50px 0" }}>
              <Button
                className={`${classes.changePasswordBtn} col-12 col-md-6 col-lg-4`}
                onClick={() => setIsChangePasswordOn((prev) => !prev)}
              >
                {isChangePasswordOn ? (
                  <span>Close</span>
                ) : (
                  <span>Change Password</span>
                )}
              </Button>
            </section>
            <div style={{ marginBottom: 50 }}>
              <Button
                className={`${classes.saveChangesBtn} col-12 col-md-4 col-lg-3`}
                disabled={!isFormValid}
                type="submit"
              >
                Save Changes
              </Button>
            </div>
          </form>
        </div>
      </section>
    </Container>
  );
};

export default ProfileEdit;
