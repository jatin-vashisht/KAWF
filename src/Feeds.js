import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Feeds.css";
import Reel from "./Reel";

const Feeds = () => {
  const [feeds, setFeeds] = useState([]);
  const getFeeds = async () => {
    const options = {
      method: "GET",
      url: "https://instagram191.p.rapidapi.com/v3/user/reels",
      params: {
        user_id: "33784388050",
        count: "12",
      },
      headers: {
        "X-RapidAPI-Key": "84132deea6mshc0e8322fe482de2p13a60ejsn185f6e9144fd",
        "X-RapidAPI-Host": "instagram191.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      setFeeds(response.data.data.edges);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getFeeds();
  }, []);

  return (
    <>
      <h1>Feeds</h1>
      <div className="feeds">
        {feeds.map((feed) => (
          <Reel key={feed.node.media.pk} src={feed.node.media.video_versions[0].url} />
        ))}
      </div>
    </>
  );
};

export default Feeds;
