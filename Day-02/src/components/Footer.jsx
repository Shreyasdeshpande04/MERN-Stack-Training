import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; MovieFlix | Designed by Shreyas</p>
      <div className="footer-links">
        <a href="#">FAQ</a><br></br>
        <a href="#">Help Center</a><br></br>
        <a href="#">Terms of Use</a><br></br>
        <a href="#">Privacy</a>
      </div>
    </footer>
  );
};

export default Footer;
