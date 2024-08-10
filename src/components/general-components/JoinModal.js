"use client";

import React from "react";

import classes from "./JoinModal.module.css";
import Link from "next/link";

const JoinConversationModal = () => {
  return (
    <div className="text-center py-4">
      <h3 className="text-center" style={{ fontSize: 20, fontWeight: "bold" }}>
        You can&apos;t leave a comment... yet
      </h3>
      <p className="text-center" style={{ fontSize: 14 }}>
        To join the conversation, you need to signup or login
      </p>
      <Link href="/sign-up" className={`${classes.joinConversationBtn} btn`}>
        Join the conversation
      </Link>
    </div>
  );
};

export default JoinConversationModal;
