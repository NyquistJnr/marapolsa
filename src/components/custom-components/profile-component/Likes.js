import LikeAndComment from "./LikeAndComment";

import img1 from "../../../../public/images/templates-imgs/popular-img1.png";
import img2 from "../../../../public/images/templates-imgs/popular-img2.png";
import img3 from "../../../../public/images/templates-imgs/popular-img3.png";

const data = [
  {
    title: "Flawsome Series: A series that will make you want for more.",
    date: "May 11, 2024",
    badge: "Reviews",
    src: img1,
  },
  {
    title:
      "Funke Akindele Steals the Show as Best Dressed at Odunlade's 'Lakatabu' Premiere",
    date: "May 11, 2024",
    badge: "News",
    src: img2,
  },
  {
    title: "Past Winners of the Marapolsa Awards (2023 Edition)",
    date: "May 11, 2024",
    badge: "Awards",
    src: img3,
  },
];

const ProfileLikes = () => {
  return (
    <section>
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
            You haven’t liked anything yet.
          </h4>
          <p style={{ fontSize: 13 }}>
            Your liked reviews, news and awards will show here.
          </p>
        </div>
      )}
      <div className="row">
        {data.length > 0 &&
          data.map((item) => (
            <div className="col-12 col-md-6 col-lg-4 py-2" key={Math.random()}>
              <LikeAndComment {...item} />
            </div>
          ))}
      </div>
    </section>
  );
};

export default ProfileLikes;
