import React from "react";

const Contact = () => {
  return (
    <div>
      <div>
        <h3 className="contact">Contact us</h3>
        <div className="footer-icons">
          <a href="narutopandit220@gmail.com" className="footer-icon">
            <i className="fa-solid fa-envelope"></i>
            <span className="message">Mail</span>
          </a>
          <a
            href="https://github.com/narutopandit"
            className="footer-icon"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://github.com/narutopandit"
            className="footer-icon"
          >
            <i className="fa-solid fa-bug"></i>
          </a>
        </div>
        <p className="final">
          Moodie.v2 @2025
          <br />
          Developed by Manish Kumar
        </p>
      </div>
    </div>
  );
};

export { Contact };
