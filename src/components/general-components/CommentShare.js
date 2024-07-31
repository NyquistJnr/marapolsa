"use client";
import Image from "next/image";

import classes from "./CommentShare.module.css";

import { useState } from "react";

import { Container } from "react-bootstrap";

// Icons
import likeIcon from "../../../public/images/icons/heart.svg";
import commentIcon from "../../../public/images/icons/comment.svg";
import saveIcon from "../../../public/images/icons/save.svg";
import likedSaveIcon from "../../../public/images/icons/likedSave.svg";
import likedHeartIcon from "../../../public/images/icons/likedHeart.svg";

// Social Handle Icons import
import { FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";

import JoinConversationModal from "./JoinModal";

import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";

import CommentBox from "./CommentBox";
import CommentList from "./CommentList";

const isLoggedIn = false;

const BackdropExample1 = (props) => {
  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropInvert="80%"
      backdropFilter="blur(5px) hue-rotate(10deg)"
    />
  );

  const [overlay, setOverlay] = useState(<OverlayOne />);

  return (
    <>
      <Modal isCentered isOpen={props.isOpen} onClose={props.onClose}>
        {overlay}
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <JoinConversationModal />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

const CommentShare = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Comment Box
  const [showCommentBox, setShowCommentBox] = useState(false);

  // Like Post
  const [likedPost, setLikedPost] = useState(false);

  // Bookmark Post
  const [bookmarkPost, setBookmarkPost] = useState(false);

  return (
    <Container>
      <BackdropExample1 isOpen={isOpen} onClose={onClose} />
      <section
        style={{
          marginTop: 20,
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <div style={{ display: "flex", padding: "10px 0" }}>
          <Image
            src={likedPost ? likedHeartIcon : likeIcon}
            alt="Like Icon"
            priority
            width={32}
            style={{ marginRight: 10 }}
            onClick={() => {
              if (isLoggedIn) {
                setLikedPost((prev) => {
                  // console.log("You liked this post!");
                  return !prev;
                });
              } else {
                onOpen();
              }
            }}
          />
          <Image
            src={commentIcon}
            alt="Comment Icon"
            priority
            width={30}
            style={{ marginRight: 10 }}
            onClick={() => {
              if (isLoggedIn) {
                setShowCommentBox((prev) => !prev);
              } else {
                onOpen();
              }
            }}
          />
          <Image
            src={bookmarkPost ? likedSaveIcon : saveIcon}
            alt="Save Icon"
            priority
            width={30}
            style={{ marginRight: 10 }}
            onClick={() => {
              if (isLoggedIn) {
                setBookmarkPost((prev) => {
                  // console.log("You're Logged In!");
                  return !prev;
                });
              } else {
                onOpen();
              }
            }}
          />
        </div>
        <div
          style={{ display: "flex", alignItems: "center", padding: "10px 0" }}
        >
          <span style={{ marginRight: 10 }}>Share:</span>
          <FaWhatsapp size={30} style={{ marginRight: 10 }} />
          <FaXTwitter size={30} style={{ marginRight: 10 }} />
          <FaInstagram size={30} style={{ marginRight: 10 }} />
          <FiFacebook size={30} />
        </div>
      </section>
      <section style={{ marginTop: 20, marginBottom: 20 }}>
        {showCommentBox && <CommentBox />}
      </section>
      <section style={{ marginTop: 20, marginBottom: 20 }}>
        <CommentList />
      </section>
    </Container>
  );
};

export default CommentShare;
