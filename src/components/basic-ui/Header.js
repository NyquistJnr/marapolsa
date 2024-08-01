"use client";

import React, { useState } from "react";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

// import { useColorMode } from "@chakra-ui/react";

import classes from "./Header.module.css";

import logo from "../../../public/images/logos/logo-light.png";

// Profile Picture Icon here (dummy)
import dpIcon from "../../../public/images/icons/dp.svg";

import SignUp from "@/components/custom-components/sign-up/SignUp";
import Login from "@/components/custom-components/sign-in/Login";

// Toggle Icon
import { CiMenuFries } from "react-icons/ci";

import {
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";

const isLoggedIn = false;

// Modal to Pop Sign In or Sign Up
export const BackdropSignUpLogIn = (props) => {
  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropInvert="80%"
      backdropFilter="blur(5px) hue-rotate(10deg)"
    />
  );

  const [overlay, setOverlay] = React.useState(<OverlayOne />);

  const handleLoginFinalClick = (a) => {
    props.onChangeLoginFinal(a);
  };

  const handleSignUpFinalClick = (a) => {
    props.onChangeSignUpFinal(a);
  };

  return (
    <>
      <Modal
        closeOnOverlayClick={false}
        isCentered
        isOpen={props.isOpen}
        onClose={props.onClose}
      >
        {overlay}
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {props.showLogin && (
              <Login handleLoginClick={handleLoginFinalClick} />
            )}
            {props.showSignUp && (
              <SignUp handleSignUpClick={handleSignUpFinalClick} />
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

// NavBar Component
const expand = "lg";
const Header = () => {
  const currentPath = usePathname();
  // const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const onChangeLoginFinal = (a) => {
    setShowLogin(a);
    setShowSignUp((a) => !a);
  };

  const onChangeSignUpFinal = (a) => {
    setShowSignUp(a);
    setShowLogin((a) => !a);
  };

  return (
    <>
      <Navbar
        key={expand}
        expand={expand}
        className="mb-3"
        style={{ background: "#fff" }}
        sticky="top"
      >
        <Container>
          <Navbar.Brand as={Link} href="/">
            <Image
              src={logo}
              alt="Marapolsa Logo"
              width={140}
              height="auto"
              priority
            />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls={`offcanvasNavbar-expand-${expand}`}
            className={classes.toggle}
          >
            <CiMenuFries
              size={25}
              style={{ fontWeight: "bold", color: "#e86c44" }}
            />
          </Navbar.Toggle>
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
            style={{ width: "65%" }}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                <Image
                  src={logo}
                  alt="Marapolsa Logo"
                  width={140}
                  height="auto"
                  priority
                />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-center flex-grow-1 pe-3">
                <Nav.Link
                  as={Link}
                  href="/reviews"
                  className={
                    currentPath === "/reviews" ||
                    currentPath === "/reviews/search"
                      ? `${classes.activeLink} ${classes.links}`
                      : `${classes.notActiveLink} ${classes.links}`
                  }
                >
                  Reviews
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  href="/news"
                  className={
                    currentPath === "/news" || currentPath === "/news/result"
                      ? `${classes.activeLink} ${classes.links}`
                      : `${classes.notActiveLink} ${classes.links}`
                  }
                >
                  News
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  href="/movies"
                  className={
                    currentPath === "/movies" ||
                    currentPath === "/movies/list" ||
                    currentPath === "/movies/result"
                      ? `${classes.activeLink} ${classes.links}`
                      : `${classes.notActiveLink} ${classes.links}`
                  }
                >
                  Movies
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  href="/awards"
                  className={
                    currentPath === "/awards"
                      ? `${classes.activeLink} ${classes.links}`
                      : `${classes.notActiveLink} ${classes.links}`
                  }
                >
                  Awards
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  href="/about-us"
                  className={
                    currentPath === "/about-us"
                      ? `${classes.activeLink} ${classes.links}`
                      : `${classes.notActiveLink} ${classes.links}`
                  }
                >
                  About Us
                </Nav.Link>
              </Nav>
              <Nav style={{ marginTop: 10 }}>
                {!isLoggedIn ? (
                  <>
                    <Button
                      className={classes["sign-in"]}
                      onClick={() => {
                        onOpen();
                        setShowLogin(true);
                        setShowSignUp(false);
                      }}
                    >
                      Sign In
                    </Button>
                    <Button
                      className={classes["sign-up"]}
                      onClick={() => {
                        onOpen();
                        setShowSignUp(true);
                        setShowLogin(false);
                      }}
                    >
                      Sign Up
                    </Button>
                  </>
                ) : (
                  <Menu>
                    <MenuButton>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          marginBottom: 5,
                        }}
                      >
                        <Image
                          src={dpIcon}
                          alt="Profile Picture"
                          width={30}
                          priority
                        />
                        <span style={{ marginLeft: 10 }}>nayazubuko</span>
                      </div>
                    </MenuButton>
                    <MenuList>
                      <MenuGroup title="Profile">
                        <MenuItem>My Account</MenuItem>
                      </MenuGroup>
                      <MenuDivider />
                      <MenuGroup title="">
                        <MenuItem>Sign Out</MenuItem>
                      </MenuGroup>
                    </MenuList>
                  </Menu>
                )}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      <BackdropSignUpLogIn
        isOpen={isOpen}
        onClose={onClose}
        showLogin={showLogin}
        showSignUp={showSignUp}
        onChangeLoginFinal={onChangeLoginFinal}
        onChangeSignUpFinal={onChangeSignUpFinal}
      />
    </>
  );
};

export default Header;
