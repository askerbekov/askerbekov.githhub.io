import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="Contact">
      <img
        src={
          "https://cdn.oneunited.com/core/content/uploads/2009/09/contact-us-hero-bg-1024x400.png"
        }
        alt="contact"
      />
      <h1>04 CONTACT</h1>
      <div className="Inputs">
        <input className="E-mailInput" type="text" placeholder="e-mail" />
        <input className="PhoneInput" type="text" placeholder="e-mail" />
        <input className="MessageInput" type="text" placeholder="e-mail" />
        <button className="submit">Submit</button>
      </div>
      <div className="SocialNetworks">
        <a
          className="Instagram"
          href="https://www.instagram.com/askerbekov_medy07/"
        >
          <img
            src={
              "https://www.buro247.ru/thumb/670x830_0/images/2018/02/nina_r/in_sta_main.jpg"
            }
            alt="Instagram"
          />
        </a>

        <a className="Telegram" href="https://t.me/askerbekov_medy07">
          <img
            src={"https://smmaero.ru/images/blog/5b169a5294d52.png"}
            alt="Telegram"
          />
        </a>

        <a className="WhatsApp" href="https://wa.me/996557220720">
          <img
            src={
              "https://seeklogo.com/images/W/whatsapp-logo-33F6A82887-seeklogo.com.png"
            }
            alt="WhatsApp"
          />
        </a>

        <a className="G-mail" href="https://mail.google.com/mail/u/0/#inbox">
          <img
            src={
              "data:image/jpeg;base64,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"
            }
            alt="G-mail"
          />
        </a>
      </div>
      <div />
    </div>
  );
}

export default Contact;
