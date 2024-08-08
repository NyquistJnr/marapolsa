"use client";

import { useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useColorMode } from "@chakra-ui/react";

import usePasswordToggle from "../../../hooks/usePasswordToggle";

import emailImage from "../../../../public/images/icons/email.svg";
import padlock from "../../../../public/images/icons/password.svg";

import classes from "./Login.module.css";
import Image from "next/image";
import { useAuth } from "@/context/AuthContext";
import { toast, ToastContainer } from "react-toastify";

const Login = (props) => {
  const { login, headerName } = useAuth();
  const [PasswordInputType, ToggleIcon] = usePasswordToggle();
  const { colorMode } = useColorMode();

  const emailRef = useRef();
  const passwordRef = useRef();

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handelChangeClick = () => {
    props.handleLoginClick((prev) => !prev);
  };

  const validateForm = () => {
    const isEmailValid = emailRef.current.value.trim() !== "";
    const isPasswordValid = passwordRef.current.value.trim() !== "";

    setEmailError(!isEmailValid);
    setPasswordError(!isPasswordValid);

    return isEmailValid && isPasswordValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      const response = await fetch("/api/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email_address: emailRef.current.value,
          password: passwordRef.current.value,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        login(data.loggedIn);
        headerName(data?.username);
        props.onClose();
      } else {
        toast.error("Wrong credentials!", {
          position: "top-center",
        });
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  // console.log("Login");

  return (
    <section style={{ marginBottom: 50 }}>
      <ToastContainer />
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
                paddingLeft: 40,
                paddingRight: 40,
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
            background: "#E86C44",
            border: "none",
            marginTop: 30,
            height: 55,
          }}
        >
          Sign In
        </Button>
      </Form>
      <div>
        <p className="text-center py-3">
          Don&apos;t have an account yet?{" "}
          <span onClick={handelChangeClick} style={{ color: "#E86C44" }}>
            Sign Up
          </span>
        </p>
      </div>
    </section>
  );
};

export default Login;
