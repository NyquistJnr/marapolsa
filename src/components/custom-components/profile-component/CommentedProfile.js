import Image from "next/image";
import styles from "./CommentedProfile.module.css";

// Icons
import likeIcon from "../../../../public/images/icons/heart.svg";
import commentIcon from "../../../../public/images/icons/comment.svg";
import saveIcon from "../../../../public/images/icons/save.svg";
import likedSaveIcon from "../../../../public/images/icons/likedSave.svg";
import likedHeartIcon from "../../../../public/images/icons/likedHeart.svg";

const CommentedProfile = ({
  title,
  author,
  date,
  content,
  imageSrc,
  dpSrc,
  username,
  time,
  userComment,
}) => {
  return (
    <>
      <div className="d-block d-md-flex">
        <Image src={imageSrc} alt="Movie Poster" className={styles.imgStyle} />
        <div className={styles.postContent}>
          <div>
            <h3 style={{ marginTop: 10, fontWeight: "bold", fontSize: 20 }}>
              {title}
            </h3>
            <p style={{ fontSize: 15 }}>{content}</p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            <div style={{ display: "flex" }}>
              <p style={{ marginRight: 20 }}>
                by <b>{author}</b>
              </p>
              <p>{date}</p>
            </div>
            <div style={{ display: "flex" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginRight: 15,
                }}
              >
                <Image src={likeIcon} alt="LikeIcon" priority />
                <span style={{ marginLeft: 7 }}>34</span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginRight: 15,
                }}
              >
                <Image src={commentIcon} alt="CommentIcon" priority />{" "}
                <span style={{ marginLeft: 7 }}>3</span>
              </div>
              <Image
                src={saveIcon}
                alt="SaveIcon"
                priority
                style={{ marginRight: 15 }}
              />
            </div>
          </div>
        </div>
      </div>
      <div
        style={{ height: 40, borderLeft: "2px solid #CDCCCC", marginLeft: 30 }}
      ></div>
      <div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Image src={dpSrc} alt="Dp" className={styles.dpStyles} priority />
          <div style={{ marginLeft: 15 }}>
            @{username} | {time}
          </div>
        </div>
        <div style={{ marginLeft: 70 }}>
          <div>{userComment}</div>
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginRight: 15,
                marginTop: 10,
              }}
            >
              <Image src={likeIcon} alt="LikeIcon" priority />
              <span style={{ marginLeft: 7 }}>34</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommentedProfile;
