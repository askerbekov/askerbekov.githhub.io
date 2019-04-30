import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="Home">
      <img
        src={
          "https://instagram.ffru6-1.fna.fbcdn.net/vp/820ffc43b5f3042838e039bfc8d4ef26/5D6F6903/t51.2885-15/sh0.08/e35/s640x640/55912191_130950964636885_2227999348786751778_n.jpg?_nc_ht=instagram.ffru6-1.fna.fbcdn.net"
        }
        alt="Home"
      />
      <div>
        <h1>I'm</h1>
        <p>ASKERBEKOV MEDERBEK.</p>
      </div>
      <div className="Developer">
        <h3>WEB-SITE DEVELOPER</h3>
      </div>
    </div>
  );
}

export default Home;
