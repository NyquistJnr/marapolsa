"use client";

import { useState, useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useColorMode } from "@chakra-ui/react";

import usePasswordToggle from "../../../hooks/usePasswordToggle";

import emailImg from "../../../../public/images/icons/email.svg";
import userImg from "../../../../public/images/icons/user-profile.svg";
import padlock from "../../../../public/images/icons/password.svg";

import classes from "./SignUp.module.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { toast, ToastContainer } from "react-toastify";

const SignUp = (props) => {
  const router = useRouter();
  const { login, headerName } = useAuth();
  const { colorMode } = useColorMode();
  const [
    PasswordInputType,
    ToggleIcon,
    PasswordInputTypeConfirm,
    ToggleIconConfirm,
  ] = usePasswordToggle();

  const emailRef = useRef();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const checkbox1Ref = useRef();
  const checkbox2Ref = useRef();

  const [emailError, setEmailError] = useState(false);
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [checkbox1Error, setCheckbox1Error] = useState(false);
  const [checkbox2Error, setCheckbox2Error] = useState(false);

  const handleChangeClick = () => {
    props.handleSignUpClick((prev) => !prev);
  };

  const validateForm = () => {
    const isEmailValid = emailRef.current.value.trim() !== "";
    const isUsernameValid = usernameRef.current.value.trim() !== "";
    const isPasswordValid = passwordRef.current.value.trim() !== "";
    const isConfirmPasswordValid =
      confirmPasswordRef.current.value.trim() !== "" &&
      confirmPasswordRef.current.value === passwordRef.current.value;
    const areCheckboxesChecked =
      checkbox1Ref.current.checked && checkbox2Ref.current.checked;

    setEmailError(!isEmailValid);
    setUsernameError(!isUsernameValid);
    setPasswordError(!isPasswordValid);
    setConfirmPasswordError(!isConfirmPasswordValid);
    setCheckbox1Error(!checkbox1Ref.current.checked);
    setCheckbox2Error(!checkbox2Ref.current.checked);

    return (
      isEmailValid &&
      isUsernameValid &&
      isPasswordValid &&
      isConfirmPasswordValid &&
      areCheckboxesChecked
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      const response = await fetch("/api/signup/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: usernameRef.current.value,
          email_address: emailRef.current.value,
          password: passwordRef.current.value,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        login(data.loggedIn);
        headerName(usernameRef.current.value);
        props.onClose();
      } else {
        toast.error("Something Went Wrong! Try another email or username", {
          position: "top-center",
        });
      }
    } catch (error) {
      console.error("Signup failed:", error);
    }
  };

  // console.log("SignUp");

  return (
    <section>
      <ToastContainer />
      <h3>Join the conversation!</h3>
      <p>Sign up to share your views, discover movies and TV shows.</p>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <div className={`${classes["email-parent"]} mb-3`}>
            <Image
              src={emailImg}
              className={classes["email-icon"]}
              priority
              alt="email icon"
            />
            <Form.Control
              ref={emailRef}
              type="email"
              placeholder="Enter your email address"
              className={classes.inputSpace}
              style={{
                height: 50,
                paddingLeft: 40,
                borderColor: emailError ? "red" : "",
              }}
              required
            />
            {emailError && (
              <Form.Text style={{ color: "red", fontSize: 12 }}>
                Email address cannot be empty.
              </Form.Text>
            )}
          </div>
        </Form.Group>
        <Form.Group controlId="formBasicName">
          <Form.Label>Username</Form.Label>
          <div className={`${classes["email-parent"]} mb-3`}>
            <Image
              src={userImg}
              className={classes["email-icon"]}
              priority
              alt="username icon"
            />
            <Form.Control
              ref={usernameRef}
              type="text"
              placeholder="Enter your username"
              className={classes.inputSpace}
              style={{
                height: 50,
                paddingLeft: 40,
                borderColor: usernameError ? "red" : "",
              }}
              required
            />
            {usernameError && (
              <Form.Text style={{ color: "red", fontSize: 12 }}>
                Username cannot be empty.
              </Form.Text>
            )}
          </div>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <div className={`${classes["email-parent"]} mb-3`}>
            <Image
              src={padlock}
              className={classes["email-icon"]}
              priority
              alt="Padlock Icon"
            />
            <span className={classes["pass-icon"]}>{ToggleIcon}</span>
            <Form.Control
              ref={passwordRef}
              type={PasswordInputType}
              placeholder="Enter your password"
              className={`${classes.inputSpace} ${classes.inputSpace1}`}
              style={{
                height: 50,
                paddingRight: 40,
                paddingLeft: 40,
                borderColor: passwordError ? "red" : "",
              }}
              required
            />
            {passwordError && (
              <Form.Text style={{ color: "red", fontSize: 12 }}>
                Password cannot be empty.
              </Form.Text>
            )}
          </div>
        </Form.Group>
        <Form.Group controlId="formBasicPassword1" style={{ marginTop: 20 }}>
          <Form.Label>Confirm Password</Form.Label>
          <div className={`${classes["email-parent"]} mb-3`}>
            <Image
              src={padlock}
              className={classes["email-icon"]}
              priority
              alt="Padlock Icon"
            />
            <span className={classes["pass-icon"]}>{ToggleIconConfirm}</span>
            <Form.Control
              ref={confirmPasswordRef}
              type={PasswordInputTypeConfirm}
              placeholder="Re-enter your password"
              className={`${classes.inputSpace} ${classes.inputSpace1}`}
              style={{
                height: 50,
                paddingRight: 40,
                paddingLeft: 40,
                borderColor: confirmPasswordError ? "red" : "",
              }}
              required
            />
            {confirmPasswordError && (
              <Form.Text style={{ color: "red", fontSize: 12 }}>
                The password isn&apos;t the same.
              </Form.Text>
            )}
          </div>
        </Form.Group>
        <div style={{ display: "flex" }}>
          <Form.Check
            ref={checkbox1Ref}
            type="checkbox"
            id="default-checkbox"
            style={{ marginRight: 10 }}
            required
          />
          <p>
            I’m at least 16 years old and accept the{" "}
            <Link href="/terms-and-conditions">
              <b>Terms and Conditions.</b>
            </Link>
          </p>
          {checkbox1Error && (
            <Form.Text style={{ color: "red", fontSize: 12 }}>
              This field is required.
            </Form.Text>
          )}
        </div>
        <div style={{ display: "flex" }}>
          <Form.Check
            ref={checkbox2Ref}
            type="checkbox"
            id="default-checkbox1"
            style={{ marginRight: 10 }}
            required
          />
          <p>
            I accept the{" "}
            <Link href="/privacy-policy">
              <b>Privacy Policy</b>
            </Link>{" "}
            and consent to the processing of my personal information in
            accordance with it.
          </p>
          {checkbox2Error && (
            <Form.Text style={{ color: "red", fontSize: 12 }}>
              This field is required.
            </Form.Text>
          )}
        </div>
        <Button
          variant="primary"
          type="submit"
          style={{
            width: "100%",
            background: "#E86C44",
            border: "none",
            marginTop: 30,
            height: 55,
            color: colorMode === "dark" ? "#555" : "#fff",
          }}
        >
          Sign Up
        </Button>
      </Form>
      <div>
        <p className="text-center py-3">
          Already have an account?{" "}
          <span onClick={handleChangeClick} style={{ color: "#E86C44" }}>
            Sign In
          </span>
        </p>
      </div>
    </section>
  );
};

export default SignUp;
