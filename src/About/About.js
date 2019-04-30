import React from "react";
import "./About.css";

function About() {
  return (
    <div className="About">
      <img
        src={
          "https://d2r55xnwy6nx47.cloudfront.net/uploads/2018/10/Fold_2880x1620-2880x1620.jpg"
        }
        alt="About"
      />
      <div>
        <h1> 01 ABOUT ME</h1>
        <p>
          Let me introduse myself. I am Mederbek Askerbekov. I'm 17 years old. I
          was born on the 7th of September in Karakol. I study in school number
          2 in the 10th form, and in the IT Academy . In the IT Academy I study
          about year . I like developing becouse it is very fascinatingly. My
          hobby are music I very like sing and sport , I often run in the park
          which the near my home. I live in "Kyrgistan" in the town "Karakol" in
          the street "Gebze" . In 2012 I went to the music school I played our
          national musical instrument "Komuz".
        </p>
      </div>
    </div>
  );
}

export default About;
