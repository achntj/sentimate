import React from "react";
import Link from "next/link";

import link from "../lib/link";

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function Nav() {
  return (
    <div className="noselect wrapper-masthead">
      <header className="masthead clearfix">
        <div className="topnav" id="myTopnav">
          <Link href="/">
            <a className="site-name">
              Senti<span style={{ color: "#5e03fc" }}>Mate</span>
            </a>
          </Link>
          <div className="right-nav">
            <a href={link}>The Model</a>
            <a href="https://community.sentimate.org/">Talk</a>
            <Link href="/about">About Us</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/our-team">Our Team</Link>
          </div>
          <button className="icon" onClick="toggle()">
            <i className="fa fa-bars"></i>
          </button>
          <a href="javascript:void(0);" className="icon" onClick={myFunction}>
            <i className="fa fa-bars"></i>
          </a>
        </div>
      </header>
    </div>
  );
}

export default Nav;
