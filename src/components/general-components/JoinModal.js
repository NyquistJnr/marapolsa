"use client";

import { BackdropSignUpLogIn } from "@/components/basic-ui/Header";
import { useDisclosure } from "@chakra-ui/react";
import React, { useState } from "react";
import { Button } from "react-bootstrap";

import classes from "./JoinModal.module.css";

const JoinConversationModal = () => {
  // Start
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
    <div className="text-center py-4">
      <h3 className="text-center">You can&apos;t leave a comment... yet</h3>
      <p className="text-center">
        To join the conversation, you need to signup or login
      </p>
      <Button
        className={classes.joinConversationBtn}
        onClick={() => {
          onOpen();
          setShowSignUp(true);
          setShowLogin(false);
        }}
      >
        Join the conversation
      </Button>
      <BackdropSignUpLogIn
        isOpen={isOpen}
        onClose={onClose}
        showLogin={showLogin}
        showSignUp={showSignUp}
        onChangeLoginFinal={onChangeLoginFinal}
        onChangeSignUpFinal={onChangeSignUpFinal}
      />
    </div>
  );
};

export default JoinConversationModal;
