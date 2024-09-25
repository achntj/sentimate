import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <footer>
      <p>
        &copy; 2022 | SentiMate is an open-source project.
        <a href="https://github.com/achintyajha/sentimate-next">
          {" "}
          View Source on GitHub
        </a>
        <br />
        Developed & Maintained by{" "}
        <a href="https://achintyajha.in">Achintya Jha (link to website).</a>
      </p>
    </footer>
  );
}

export default Footer;
