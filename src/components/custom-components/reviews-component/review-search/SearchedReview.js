"use client";

import Image from "next/image";

import { Container } from "react-bootstrap";
import classes from "./SearchedReview.module.css";

import img1 from "../../../../../public/images/templates-imgs/searchedReviewMovie.png";

import ReviewPack from "../ReviewPack";

import CommentShare from "@/components/general-components/CommentShare";
import RatingComponent from "@/components/general-components/RatingComponent";

const SearchedReviewComponent = () => {
  return (
    <main style={{ marginBottom: 50 }}>
      <Container>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-5 col-lg-3 py-2">
            <Image
              src={img1}
              alt="Searched Review"
              style={{ width: "100%" }}
              priority
            />
          </div>
          <div className="col-12 col-sm-12 col-md-7 col-lg-9 py-2">
            <h3 style={{ fontWeight: "bold" }}>
              Momiwa: An Epic Nollywood Drama
            </h3>
            <div>
              <div className={classes.text}>
                <b>Genre:</b> Drama
              </div>
              <div className={classes.text}>
                <b>Industry:</b> Nollywood
              </div>
              <div className={classes.text}>
                <b>Streaming Platform:</b> Prime Video
              </div>
              <div className={classes.text}>
                <b>Movie Director:</b> Biodun Stephen
              </div>
              <div className={classes.text}>
                <b>Cast:</b> Iyabo Ojo, Uzor Arukwe,Precious Udoh, Blessing Nze,
                MC Lively
              </div>
            </div>
          </div>
        </div>
        <div style={{ marginTop: 20, marginBottom: 20 }}>
          <div>
            <b>By:</b> Chigoxx
          </div>
          <div>
            <b>Published:</b> 3 hours ago
          </div>
        </div>
        <div>
          <h4>Plot</h4>
          <hr />
          <p>
            Plots inspired by true events often risk coming across as boring or
            clichéd, but that’s not the case here. This story stands out as both
            engaging and entertaining, while also providing valuable insights. 
            While the beginning might feel a bit slow and somewhat disjointed,
            this initial pacing doesn’t detract from the overall experience. In
            fact, the plot quickly picks up momentum, drawing viewers in and
            keeping them hooked until the very end. The early confusion is soon
            replaced by a clear, compelling storyline that holds your interest
            throughout, making it well worth watching.
          </p>
        </div>
        <div>
          <h4>Acting</h4>
          <hr />
          <p>
            Blessing Nze, the queen of the screen, delivered a phenomenal
            performance. She masterfully adopted the accent, pulling it off like
            a pro, which added depth and authenticity to her character. Her
            ability to immerse herself in the role and bring the character to
            life was truly impressive, solidifying her status as a top-tier
            actress. Uzor Arukwe also stood out with his amazing performance. He
            has cemented his place as one of Nigeria&apos;s best actors,
            showcasing his exceptional talent and versatility. His portrayal was
            nuanced and compelling, demonstrating his remarkable range and
            dedication to his craft. Iyabo&apos;s performance was noteworthy as
            well. Despite a few instances of overacting, she brought a unique
            energy and presence to her role. Her efforts contributed
            significantly to the film, and even in the scenes where her acting
            was a bit exaggerated, she managed to keep the audience engaged and
            entertained. Overall, the cast&apos;s performances were a highlight
            of the film, each actor bringing something special to the table and
            enhancing the overall impact of the story.
          </p>
        </div>
        <div>
          <h4>Characters</h4>
          <hr />
          <p>
            Momiwa was the perfect protagonist, effortlessly capturing the
            audience&apos;s attention with her compelling and relatable
            performance. She brought a depth and authenticity to her character
            that made it easy for viewers to root for her. Her portrayal was
            both powerful and nuanced, making her a standout element of the
            story. Naeto was a well-rounded character as well, adding layers of
            complexity and richness to the narrative. His development throughout
            the film was handled with care, making his journey both believable
            and engaging. The interplay between Momiwa and Naeto provided a
            solid backbone for the story, highlighting their strengths as
            individual characters and as a dynamic duo. The children in the film
            were absolutely adorable, bringing a sense of innocence and charm
            that was delightful to watch. However, Vida&apos;s character could
            have benefited from better lines, which would have allowed her to
            shine even more. Despite this, the children&apos;s performances
            added a heartwarming touch to the film, enhancing its emotional
            depth. Kiki played the role of the villain with a commendable
            effort. Her portrayal was decent, effectively embodying the
            antagonistic force in the story. While her character might not have
            been the most menacing villain ever seen, she brought a certain
            flair and intensity that made her a credible adversary. Her
            interactions with the other characters added tension and drama,
            contributing to the overall suspense of the plot.
          </p>
        </div>
        <div>
          <h4>Storytelling</h4>
          <hr />
          <p>
            This story exuded a warm and fuzzy charm that resonated deeply with
            viewers. From the beginning, it wrapped the audience in a comforting
            embrace, creating an emotionally rich and engaging experience.
            Throughout the film, I found myself filled with questions and
            curiosity, eagerly anticipating how the plot would unfold. As the
            narrative progressed, these questions were answered beautifully,
            weaving together the various threads of the story in a satisfying
            and cohesive manner. However, there was one aspect that felt
            somewhat lacking: the explanation of Momiwa&apos;s family. This
            missing piece left a slight gap in the otherwise seamless narrative.
            A deeper exploration of her family background could have added even
            more depth to her character and enriched the overall story. Despite
            this omission, the film managed to maintain its charm and impact.
          </p>
        </div>
        <div>
          <h4>The Verdict</h4>
          <hr />
          <p>
            This movie was a simple, wholesome, and thoroughly entertaining
            experience. It captured the essence of feel-good storytelling,
            offering a narrative that resonated with audiences on multiple
            levels. The filmmakers got almost everything right. Blessing
            Nze&apos;s acting was a standout element, bringing depth and
            authenticity to her character. Her exceptional performance added
            significant richness to the story. Overall, the movie was delightful
            and memorable. Its simplicity and wholesomeness, combined with
            stellar acting and meaningful lessons, made it a true gem. The
            filmmakers deserve commendation for their good work.
          </p>
        </div>
        <RatingComponent />
        <CommentShare />
        <div style={{ marginTop: 50 }}>
          <ReviewPack title="Similar Reviews" />
        </div>
      </Container>
    </main>
  );
};

export default SearchedReviewComponent;
