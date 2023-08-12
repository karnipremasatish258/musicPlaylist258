import React, { useEffect, useState } from "react";
import "../styles/App.css";
import { BiSearch, BiRefresh } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";
import { Tooltip } from "react-tooltip";
const App = () => {
  const songsPlaylist = [
    {
      image:
        "https://m.media-amazon.com/images/M/MV5BMjk4M2QxYjctYWZlMi00MmYwLWE0YzYtMzI2ZTU2MmVmYTA2XkEyXkFqcGdeQXVyMTk4OTA2Nzg@._V1_.jpg",
      name: "Perfect",
      songType: "Pop",
      duration: "4:50",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/en/b/b4/Shape_Of_You_%28Official_Single_Cover%29_by_Ed_Sheeran.png",
      name: "Shape of you",
      songType: "Divide",
      duration: "4:30",
    },
    {
      image: "https://i.ytimg.com/vi/pVqX2u6YWqI/maxresdefault.jpg",
      name: "Visiting Hours",
      songType: "Folk-Pop",
      duration: "3:58",
    },
    {
      image: "https://i.ytimg.com/vi/421wDCaaEqo/maxresdefault.jpg",
      name: "Shivers",
      songType: "Dance-Pop",
      duration: "4:09",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZCYThmo3hv0jqIOUrBLkGHVsr2-pBpJvElQ&usqp=CAU",
      name: "Bad Habits",
      songType: "Dance-Pop",
      duration: "2:52",
    },
  ];
  const [newArr, setNewArr] = useState(songsPlaylist);
  const [val, setVal] = useState("");
  const handler = (names) => {
    setNewArr(newArr.filter((n) => n.name !== names));
  };
  const handleSearch = () => {
    const filteredArr = songsPlaylist.filter((n) => n.name.includes(val));
    setNewArr(filteredArr);
  };
  useEffect(() => {
    handleSearch();
  }, [val]);
  return (
    <div className="main">
      <div className="top-image">
        <div className="top-image-details">
          <h1>Ed Sheeran</h1>
          <p>Singer</p>
        </div>
      </div>
      <div className="down-div">
        <div className="search-details">
          <h1>Songs Playlist</h1>
          <div>
            <BiRefresh
              onClick={() => setNewArr(songsPlaylist)}
              style={{ fontSize: "32px" }}
            />
          </div>
          <div className="search-button">
            <input
              placeholder="Search"
              type={"search"}
              onChange={(e) => setVal(e.target.value)}
            />
            <BiSearch className="search-icon" />
          </div>
        </div>
        <div className="cards-page">
          {newArr.map((n) => (
            <div key={n.name} className="card">
              <img src={n.image} />
              <div className="card-details">
                <div>
                  <h1>{n.name}</h1>
                  <p>{n.songType}</p>
                </div>
                <div className="duration-div">
                  <p>{n.duration}</p>
                  <AiOutlineDelete
                    data-for="delete"
                    className="deleteIcon"
                    onClick={() => handler(n.name)}
                  />
                  <Tooltip id="delete" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
