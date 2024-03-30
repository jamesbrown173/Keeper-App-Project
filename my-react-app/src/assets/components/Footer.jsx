import React from "react";

const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <footer>
      <p> The current year is {currentYear}</p>
    </footer>
  );
}

export default Footer;
