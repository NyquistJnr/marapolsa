"use client";

import { Card, Image } from "react-bootstrap";
import styles from "./CommentList.module.css";

const comments = [
  {
    username: "naya.azubuko",
    time: "45m",
    content:
      "Exactly my thought. It would have made up happier knowing atleast a little about her family and what the flashback was about.",
    likes: 50,
    replies: 0,
  },
  {
    username: "kimberlypeters",
    time: "10h",
    content:
      "Mumiwa is so underated. She's one of the best actresses out there.",
    likes: 34,
    replies: 0,
  },
  {
    username: "kimberlypeters",
    time: "10h",
    content:
      "I wish they had shown more of both of them trying to fall in love. How come they lived together for so long and nobody caught feelings?",
    likes: 1200,
    replies: 2,
  },
  // Add more comments as needed for testing scrolling
];

const CommentList = () => {
  return (
    <div className={styles.commentListContainer}>
      {comments.map((comment, index) => (
        <Card key={index} className={`p-3 mb-3 ${styles.commentCard}`}>
          <div className="d-flex align-items-center mb-2">
            <Image
              src="/user-avatar.png"
              roundedCircle
              className={styles.avatar}
              alt="dp profile"
            />
            <div className="ml-2">
              <span className={styles.username}>@{comment.username}</span> |{" "}
              <span className={styles.time}>{comment.time}</span>
            </div>
          </div>
          <Card.Text className={styles.content}>{comment.content}</Card.Text>
          <div className="d-flex justify-content-start align-items-center">
            <span className={styles.replies}>
              {comment.replies} <i className="bi bi-chat"></i>
            </span>
            <span className={styles.likes}>
              {comment.likes} <i className="bi bi-heart"></i>
            </span>
          </div>
          <hr />
        </Card>
      ))}
    </div>
  );
};

export default CommentList;
