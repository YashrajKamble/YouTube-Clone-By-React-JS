import "./Feed.css";
import { Link } from "react-router-dom";
import { API_KEY } from "../../data";
import { useEffect, useState } from "react";
import { value_converter } from "../../data";
import moment from "moment";

const Feed = ({ category }) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const videoList_url = `  https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=48&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`;
    await fetch(videoList_url)
      .then((response) => response.json())
      .then((data) => setData(data.items));
  };

  useEffect(() => {
    fetchData();
    window.scrollTo(0, 0);
  }, [category]);

  return (
    <div className="feed">
      {data.map((item, index) => {
        return (
          <Link
            to={`video/${item.snippet.categoryID}/${item.id}`}
            className="card"
            key={index}
          >
            <img src={item.snippet.thumbnails.medium.url} alt="" />
            {/* <h2>{item.snippet.title}</h2> */}
            <h2>
              {item.snippet.title.length <= 60
                ? item.snippet.title
                : item.snippet.title.slice(0, 60) + "..."}
            </h2>

            {/* <h3>{item.snippet.channelTitle}</h3> */}
            <h3>
              {item.snippet.channelTitle.length <= 25
                ? item.snippet.channelTitle
                : item.snippet.channelTitle.slice(0, 25) + "..."}
            </h3>

            <p>
              {value_converter(item.statistics.viewCount)} views &bull;{" "}
              {moment(item.snippet.publishedAt).fromNow()}
            </p>
          </Link>
        );
      })}
    </div>
  );
};

export default Feed;
