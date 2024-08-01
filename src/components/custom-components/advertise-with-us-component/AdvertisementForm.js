"use client";

import { useState } from "react";

import styles from "./AdvertisementForm.module.css"; // Import module styles

export default function AdvertisementForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [advertisementOption, setAdvertisementOption] = useState("");
  const [comments, setComments] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(email, name, advertisementOption, comments);
  };

  return (
    <div className="col-md-7 col-lg-6">
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.input}
        />
        <input
          type="text"
          placeholder="Enter your first name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={styles.input}
        />
        <select
          value={advertisementOption}
          onChange={(e) => setAdvertisementOption(e.target.value)}
          className={styles.select}
        >
          <option value="">Choose...</option>
          <option value="LeaderboardAds">Leaderboard Ads</option>
          <option value="SidebarAds">Sidebar Ads</option>
          <option value="SponsoredContent">Sponsored Content</option>
          <option value="VideoAds">Video Ads</option>
          {/* Add more options here */}
        </select>
        <textarea
          placeholder="Additional comments"
          value={comments}
          onChange={(e) => setComments(e.target.value)}
          className={styles.textarea}
        />
        <button
          type="submit"
          disabled={!email || !advertisementOption}
          className={styles.button}
          style={{
            backgroundColor:
              email && name && advertisementOption && comments
                ? "#E86C44"
                : "#F9DCD2",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
