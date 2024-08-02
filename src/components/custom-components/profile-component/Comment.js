import img3 from "../../../../public/images/templates-imgs/showReview.png";
import img4 from "../../../../public/images/templates-imgs/dp.png";

const data = [
  {
    title: "Different Strokes: Same old story saved by good casting",
    author: "Chigoxx",
    date: "May 11, 2024",
    content:
      "Lorem ipsum dolor sit amet consectetur. Bibendum ornare velit elementum tortor mattis. Lorem ipsum ut vel nunc curabitur tempus dui magna morbi. Suspendisse consectetur a proin fermentum tincidunt molestie tortor. Auctor duis lorem ultrices malesuada scelerisque...",
    imageSrc: img3,
    dpSrc: img4,
    username: "naya.azubuko",
    time: "45m",
    userComment:
      "Exactly my thought. It would have made up happier knowing atleast a little about her family and what the flashback was about.",
  },
  {
    title: "Different Strokes: Same old story saved by good casting",
    author: "Chigoxx",
    date: "May 11, 2024",
    content:
      "Lorem ipsum dolor sit amet consectetur. Bibendum ornare velit elementum tortor mattis. Lorem ipsum ut vel nunc curabitur tempus dui magna morbi. Suspendisse consectetur a proin fermentum tincidunt molestie tortor. Auctor duis lorem ultrices malesuada scelerisque...",
    imageSrc: img3,
    dpSrc: img4,
    username: "naya.azubuko",
    time: "45m",
    userComment:
      "Exactly my thought. It would have made up happier knowing atleast a little about her family and what the flashback was about.",
  },
];
import CommentedProfile from "./CommentedProfile";

const ProfileComment = () => {
  return (
    <section>
      <div>
        {data.length < 1 && (
          <div
            className="text-center"
            style={{
              height: 250,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <h4 style={{ fontWeight: "bold", fontSize: 16 }}>
              You haven’t commented on anything yet.
            </h4>
            <p style={{ fontSize: 13 }}>
              Your comments on reviews, news and awards will show here.
            </p>
          </div>
        )}
      </div>
      <div className="row">
        {data.length > 0 &&
          data.map((item) => (
            <div
              className="col-12 py-2"
              key={Math.random()}
              style={{ marginBottom: 40 }}
            >
              <CommentedProfile {...item} />
            </div>
          ))}
      </div>
    </section>
  );
};

export default ProfileComment;
