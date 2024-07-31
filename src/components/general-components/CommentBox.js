"use client";
// components/CommentBox.js
import { useState } from "react";
import Image from "next/image";
import { Form, Button, InputGroup } from "react-bootstrap";
import styles from "./CommentBox.module.css";

import dpImage from "../../../public/images/icons/dp.svg";

const CommentBox = () => {
  const [comment, setComment] = useState("");

  const handleChange = (e) => {
    if (e.target.value.length <= 1000) {
      setComment(e.target.value);
    }
  };

  return (
    <div className={`p-3 ${styles.commentBox}`}>
      <InputGroup className="mb-3">
        <InputGroup>
          <Image
            src={dpImage}
            className={styles.avatar}
            alt="Profile Picture"
          />
        </InputGroup>
        <Form.Control
          as="textarea"
          rows={4}
          placeholder="Add a comment..."
          value={comment}
          onChange={handleChange}
          className={styles.textArea}
          maxLength="1000"
        />
      </InputGroup>
      <div className="d-flex justify-content-between align-items-center">
        <span className={styles.charCount}>{comment.length}/1000</span>
        <Button
          variant="outline-secondary"
          disabled={comment.length === 0}
          className={styles.commentButton}
        >
          Comment
        </Button>
      </div>
    </div>
  );
};

export default CommentBox;
