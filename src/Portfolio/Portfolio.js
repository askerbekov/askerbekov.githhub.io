import React from "react";
import "./Portfolio.css";

function Portfolio() {
  return (
    <div className="Portfolio">
      <img
        src={
          "https://www.jlevines.com/wp-content/uploads/2018/05/portfolioBG.jpg"
        }
        alt="Content3"
      />
      <div>
        <h1>02 PORTFOLIO</h1>
        <p>MY LATEST WORK. SEE MORE </p>
        <div className="portfolioWorks">
          <p>
            My first work in IT Academy{" "}
            <a href="https://askerebekov.github.io/"> Fortuna Trevel</a>
          </p>
          <p>
            My Github repositoris{" "}
            <a href="https://github.com/askerebekov"> GitHub</a>
          </p>
          <p>
            My Code Pen works FRONTEND{" "}
            <a href="https://codepen.io/medy07/"> CodePen</a>
          </p>
          <p>
            My Code Pen Sandbox works BACKEND{" "}
            <a href="https://codesandbox.io/u/askerebekov"> CodePenSandbox</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
