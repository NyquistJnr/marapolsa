"use client";

import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useColorMode } from "@chakra-ui/react";

import usePasswordToggle from "../../../hooks/usePasswordToggle";

import emailImage from "../../../../public/images/icons/email.svg";
import padlock from "../../../../public/images/icons/password.svg";

import classes from "./Login.module.css";
import Image from "next/image";

const Login = (props) => {
  const [PasswordInputType, ToggleIcon] = usePasswordToggle();
  const { colorMode } = useColorMode();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const [userClick, setUserClick] = useState(false);

  const handelChangeClick = () => {
    setUserClick((prev) => !prev);
    props.handleLoginClick(userClick);
  };

  // console.log(userClick);

  useEffect(() => {
    // Check if both fields are filled
    if (email.trim() !== "" && password.trim() !== "") {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [email, password]);

  const handleBlur = (field) => {
    if (field === "email" && email.trim() === "") {
      setEmailError(true);
    }
    if (field === "password" && password.trim() === "") {
      setPasswordError(true);
    }
  };

  const handleFocus = (field) => {
    if (field === "email") {
      setEmailError(false);
    }
    if (field === "password") {
      setPasswordError(false);
    }
  };

  const handleChange = (e, field) => {
    if (field === "email") {
      setEmail(e.target.value);
      if (e.target.value.trim() !== "") {
        setEmailError(false);
      }
    }
    if (field === "password") {
      setPassword(e.target.value);
      if (e.target.value.trim() !== "") {
        setPasswordError(false);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Additional submit logic

    console.log({ email, password });

    setEmail("");
    setPassword("");
  };

  return (
    <section style={{ marginBottom: 50 }}>
      <h3>Welcome back!</h3>
      <p>Sign in to share your views, discover movies and TV shows. </p>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <div className={`${classes["email-parent"]} mb-3`}>
            <Image
              src={emailImage}
              className={classes["email-icon"]}
              priority
              alt="email Icon"
            />
            <Form.Control
              type="email"
              placeholder="Enter your email address"
              className={classes.inputSpace}
              style={{
                height: 50,
                paddingLeft: 40,
                borderColor: emailError ? "red" : "",
              }}
              required
              value={email}
              onChange={(e) => handleChange(e, "email")}
              onBlur={() => handleBlur("email")}
              onFocus={() => handleFocus("email")}
            />
            {emailError && (
              <Form.Text style={{ color: "red", fontSize: 12 }}>
                Email address cannot be empty.
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
              type={PasswordInputType}
              placeholder="Enter your password"
              className={`${classes.inputSpace} ${classes.inputSpace1}`}
              style={{
                height: 50,
                paddingLeft: 40,
                paddingRight: 40,
                borderColor: passwordError ? "red" : "",
              }}
              required
              value={password}
              onChange={(e) => handleChange(e, "password")}
              onBlur={() => handleBlur("password")}
              onFocus={() => handleFocus("password")}
            />
            {passwordError && (
              <Form.Text style={{ color: "red", fontSize: 12 }}>
                Password cannot be empty.
              </Form.Text>
            )}
          </div>
          <div style={{ marginTop: -15 }}>
            <Form.Text style={{ color: colorMode === "dark" ? "white" : "" }}>
              Create a strong password with at least 8 characters, including one
              uppercase letter, one number, and one special character.
            </Form.Text>
          </div>
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          style={{
            width: "100%",
            background: isFormValid ? "#E86C44" : "#F9DCD2",
            border: "none",
            marginTop: 30,
            height: 55,
          }}
          disabled={!isFormValid}
        >
          Sign In
        </Button>
      </Form>
      <div>
        <p className="text-center py-3">
          Don't have an account yet?{" "}
          <span onClick={handelChangeClick} style={{ color: "#E86C44" }}>
            Sign Up
          </span>
        </p>
      </div>
    </section>
  );
};

export default Login;
