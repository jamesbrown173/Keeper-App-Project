import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p> The current year is {currentYear}</p>
    </footer>
  );
}

export default Footer;
