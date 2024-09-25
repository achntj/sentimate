import Link from "next/link";

import model from "../lib/link";
export default function Home() {
  return (
    <>
      <div className="hero">
        <div className="hero-contents">
          <h1>
            We leverage <span className="header-span">technology</span> to
            detect depression, <span className="header-span">not surveys</span>
          </h1>
          <p>
            Based on millions of tweets scraped from the web
            <br />
            Accurate and fast, our machine learning model can help you detect
            depression like never before.
            <br />
            <span style={{ color: "var(--color-accent-secondary)" }}>
              Now helped over 5000 people!
            </span>
            <br />
            <Link href="/blog/collaborate">
              <a className="noselect button blue">Join Us</a>
            </Link>
            <Link href={model}>
              <a className="noselect button purple">Detection Tool</a>
            </Link>
          </p>
        </div>
        <div className="hero-img">
          <img src="smile.png" alt="Smiley" />
        </div>
      </div>

      <div className="about">
        <h2>About Us</h2>
        <p>
          SentiMate is a suite of tools that have been developed to fight
          depression. We have developed a{" "}
          <a href={model}>machine learning model</a>, that can detect depression
          using textual data, for example tweets. We have also built a
          micro-blogging web-app,{" "}
          <a href="https://talk.sentimate.org/">StuClan</a>, that provides a
          platform for students to talk about specific topics like mental
          health, education and much more. With these platforms especially
          dedicated to students, SentiMate aims to bring an end to depression
          through technology.
        </p>
        <div className="image-container">
          <img src="mother-teresa.jpeg" alt="Picture of Mother Teresa" />
        </div>
        <em>“ Peace begins with a smile.” — Mother Teresa.</em>
        <p>
          Sentiment Analysis is popular among natural language processing (NLP)
          researchers, but depression detection using NLP is not as common.
          Furthermore, there exists no depression detection system, that can
          identify depressed users on social media using just text. SentiMate
          does that; it offers an alternative to traditional surveys. This web
          interface is based on multiple machine learning and NLP models, all
          developed by us, to make a system that can detect depression with an
          accuracy over 96%. This makes the model not only unique, but also
          accurate for our purpose.
          <br />
        </p>
      </div>

      <div className="recognitions">
        <h2>Recognitions</h2>
        <div className="recog-item">
          <a href="">
            <img src="news24.jpeg" alt="Logo of News24" />
            <p>
              Featured on India's and South Africa's leading news channel-
              News24.
            </p>
          </a>
        </div>
        <hr />
        <div className="recog-item">
          <a href="yaa.jpg">
            <img src="yaa-logo.png" alt="Award Certificate" />
            <p>
              Received the Young Achiever's Award for contribution to Nation
              Building.
            </p>
          </a>
        </div>
        <hr />
        <div className="recog-item">
          <a href="Happy_Plus.pdf">
            <img src="happy-plus.png" alt="Logo of Happy Plus" />
            <p>
              Recognised by Happy Plus, a team of happiness experts,
              psychologists and researchers.
            </p>
          </a>
        </div>
      </div>

      <div>
        <h2>Why SentiMate?</h2>
        <p>
          Apart from great accuracy, the model performs well on real world data
          as well. Below are some sample tweets that{" "}
          <a
            target="_blank"
            href="https://www.healthline.com/health/depression/tweets-what-depression-feels-like"
          >
            "capture what depression feels like"
          </a>{" "}
          and the model does an excellent job in correctly identifying them.
          <blockquote>
            <ul>
              <em>
                -Do you ever have those days where no matter how much you force
                yourself to do things you still feel awful
              </em>
              <em>
                -every day i begin from feeling worthless and proceed from there
              </em>
              <em>-i'm sad</em>
              <em>-dude, life is depressing</em>
              <em>-even after all this i’m still afraid of sadness</em>
              <em>
                -she died as she lived…wondering whether she was tired or dying
              </em>
            </ul>
          </blockquote>
          <p>
            (Source-{" "}
            <a
              target="_blank"
              href="https://www.healthline.com/health/depression/tweets-what-depression-feels-like"
            >
              Healthline
            </a>
            )
          </p>
        </p>
        <p>
          <br />
          Nevertheless, this tool is not a substitute to consulting professional
          help. The objective of this tool is provide quick and accurate
          identification of depression for free, based on which one may consult
          therapists and doctors.
          <br />
        </p>
      </div>
    </>
  );
}
