"use client";

import { useEffect, useState } from "react";
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

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const [userClick, setUserClick] = useState(false);

  const handleChangeClick = () => {
    setUserClick((prev) => !prev);
    props.handleSignUpClick(userClick);
  };

  useEffect(() => {
    // Check if all fields are filled, passwords match, and checkboxes are checked
    const isEmailValid = email.trim() !== "";
    const isUsernameValid = username.trim() !== "";
    const isPasswordValid = password.trim() !== "";
    const isConfirmPasswordValid =
      confirmPassword.trim() !== "" && password === confirmPassword;
    const areCheckboxesChecked = checkbox1 && checkbox2;

    if (
      isEmailValid &&
      isUsernameValid &&
      isPasswordValid &&
      isConfirmPasswordValid &&
      areCheckboxesChecked
    ) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [email, username, password, confirmPassword, checkbox1, checkbox2]);

  const handleBlur = (field) => {
    if (field === "email" && email.trim() === "") {
      setEmailError(true);
    }
    if (field === "username" && username.trim() === "") {
      setUsernameError(true);
    }
    if (field === "password" && password.trim() === "") {
      setPasswordError(true);
    }
    if (field === "confirmPassword" && confirmPassword.trim() === "") {
      setConfirmPasswordError(true);
    }
  };

  const handleFocus = (field) => {
    if (field === "email") {
      setEmailError(false);
    }
    if (field === "username") {
      setUsernameError(false);
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
    if (field === "username") {
      setUsername(e.target.value);
      if (e.target.value.trim() !== "") {
        setUsernameError(false);
      }
    }
    if (field === "password") {
      setPassword(e.target.value);
      if (e.target.value.trim() !== "") {
        setPasswordError(false);
      }
      if (confirmPassword !== e.target.value) {
        setConfirmPasswordError(true);
      } else {
        setConfirmPasswordError(false);
      }
    }
    if (field === "confirmPassword") {
      setConfirmPassword(e.target.value);
      if (e.target.value.trim() !== "" && e.target.value === password) {
        setConfirmPasswordError(false);
      } else {
        setConfirmPasswordError(true);
      }
    }
  };

  const handleCheckboxChange = (e, checkbox) => {
    if (checkbox === "checkbox1") {
      setCheckbox1(e.target.checked);
    }
    if (checkbox === "checkbox2") {
      setCheckbox2(e.target.checked);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/signup/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email_address: email,
          password,
        }),
      });
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        login(data.loggedIn);
        headerName(username);
        props.onClose();
      } else {
        toast.error("Something Went Wrong!", {
          position: "top-center",
        });
      }
    } catch (error) {
      console.error("Signup failed:", error);
      // throw error;
    }
  };

  return (
    <section>
      <ToastContainer />
      <h3>Join the conversation!</h3>
      <p>Sign up to share your views, discover movies and TV shows. </p>
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
              type="email"
              placeholder="Enter your email address"
              className={classes.inputSpace}
              style={{
                height: 50,
                paddingLeft: 40,
                borderColor: emailError ? "red" : "",
              }}
              onChange={(e) => handleChange(e, "email")}
              onBlur={() => handleBlur("email")}
              onFocus={() => handleFocus("email")}
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
              type="text"
              placeholder="Enter your username"
              className={classes.inputSpace}
              style={{
                height: 50,
                paddingLeft: 40,
                borderColor: usernameError ? "red" : "",
              }}
              onChange={(e) => handleChange(e, "username")}
              onBlur={() => handleBlur("username")}
              onFocus={() => handleFocus("username")}
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
              type={PasswordInputType}
              placeholder="Enter your password"
              className={`${classes.inputSpace} ${classes.inputSpace1}`}
              style={{
                height: 50,
                paddingRight: 40,
                paddingLeft: 40,
                borderColor: passwordError ? "red" : "",
              }}
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
          <div
            style={{
              marginTop: -15,
            }}
          >
            <Form.Text style={{ color: colorMode === "dark" ? "white" : "" }}>
              Create a strong password with at least 8 characters, including one
              uppercase letter, one number, and one special character.
            </Form.Text>
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
              type={PasswordInputTypeConfirm}
              placeholder="Re-enter your password"
              className={`${classes.inputSpace} ${classes.inputSpace1}`}
              style={{
                height: 50,
                paddingRight: 40,
                paddingLeft: 40,
                borderColor: confirmPasswordError ? "red" : "",
              }}
              onChange={(e) => handleChange(e, "confirmPassword")}
              onBlur={() => handleBlur("confirmPassword")}
              onFocus={() => handleFocus("confirmPassword")}
            />
            {confirmPasswordError && (
              <Form.Text style={{ color: "red", fontSize: 12 }}>
                The password isn&apos;t the same
              </Form.Text>
            )}
          </div>
        </Form.Group>
        <div style={{ display: "flex" }}>
          <Form.Check
            type="checkbox"
            id="default-checkbox"
            style={{ marginRight: 10 }}
            checked={checkbox1}
            onChange={(e) => handleCheckboxChange(e, "checkbox1")}
          />
          <p>
            I’m at least 16 years old and accept the{" "}
            <Link href="/terms-and-conditions">
              <b>Terms and Conditions.</b>
            </Link>
          </p>
        </div>
        <div style={{ display: "flex" }}>
          <Form.Check
            type="checkbox"
            id="default-checkbox1"
            style={{ marginRight: 10 }}
            checked={checkbox2}
            onChange={(e) => handleCheckboxChange(e, "checkbox2")}
          />
          <p>
            I accept the{" "}
            <Link href="/privacy-policy">
              <b>Privacy Policy</b>
            </Link>{" "}
            and consent to the processing of my personal information in
            accordance with it.
          </p>
        </div>
        <Button
          variant="primary"
          type="submit"
          style={{
            width: "100%",
            background:
              colorMode === "light"
                ? isFormValid
                  ? "#E86C44"
                  : "#F9DCD2"
                : isFormValid
                ? "#fff"
                : "#ccc",
            border: "none",
            marginTop: 30,
            height: 55,
            color: colorMode === "dark" ? "#555" : "",
          }}
          disabled={!isFormValid}
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
