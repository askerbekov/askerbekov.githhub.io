import React from "react";

import "./Services.css";

function Services(props) {
  return (
    <div className="Services">
      <img
        src={
          "https://static.wixstatic.com/media/035244_9f46dd7c6e524eef94172c670fff1913~mv2_d_1920_1343_s_2.jpg/v1/fill/w_1351,h_1250,al_c,q_85,usm_0.66_1.00_0.01/035244_9f46dd7c6e524eef94172c670fff1913~mv2_d_1920_1343_s_2.webp"
        }
        alt="Content2"
      />
      <div>
        <h1>01 SERVICES</h1>
        <p>MY KNOWLEDGE LEVEL IN SOFTWARE</p>
      </div>
      <div className="knowleg">
        <p>
          я предоставляю услуги программиста заключаю договор с клиентом о
          данном сайте делаю программы на вкус заказчика особый подход к
          функционалу а так же к клиентам{" "}
          <div>
            {" "}
            знание Fromtend (HTML , CSS, JAVASCRIPT) and Backand (React, CSS){" "}
          </div>
        </p>
      </div>
    </div>
  );
}

export default Services;
