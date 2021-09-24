import React from "react";
import "../../styles/Home.css";
import "../../App.css";
import Footer from "../Footer";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="container">
        <div className="pic-container">
          <h1 className="punchline-home">
            Security Surveillance Systems and Structured Network
          </h1>
          <Link to="/contactus">
            <div className="ready-btn">
              <button className="btnForm">Get Started</button>
            </div>
          </Link>
        </div>
      </div>

      <div className="section" style={{ backgroundColor: "#ebebeb" }}>
        <div className="home-section-content">
          <div className="section-content">
            <div className="section-title">
              <h1>How It Started</h1>
            </div>
            <p>
              CableEx is a network cabling, security surveillance camera and
              access control installation company that was founded in Denver,
              Colorado by Chris Alonzo in 2019.
            </p>
            <br></br>
            <p>
              Then, the reason was for the love of the art. Most time was spent
              creating incredible network rooms, wiring entire office buildings,
              installing, and programming commercial security cameras. That was
              2019. Since then, the work has not changed much but quality has
              improved, and our team has drastically grown as well as our base
              of knowledge.
            </p>
            <br></br>
            <p>However, the vision has evolved.</p>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="home-section-content">
          <div className="section-content">
            <div className="section-title">
              <h1>The CableEx Mission</h1>
            </div>
            <p>
              Our vision has evolved into one that sees no end for our potential
              and no end for the successes of the businesses we partner with.
            </p>
            <br></br>
            <p>
              We are the premier structured network cabling vendor in the
              nation. We provide intelligent designs, field expertise,executive
              professionalism, shorter timelines, and economic value for your
              business.
            </p>
            <br></br>
            <p>
              We are the best for all the right reasons. We are, the network
              cabling and security solutions company that installs the
              foundation that helps a business{" "}
              <strong>"change the world" </strong>– Chris Alonzo
            </p>
          </div>
        </div>
      </div>

      <div className="ready-container">
        <div className="ready-header">
          <h2>Ready to bridge that gap?</h2>
        </div>
        <p className="ready-sub-title">
          Contact us to integrate your business and network now!
        </p>

        <Link to="/contactus">
          <div className="ready-btn">
            <button className="btnForm">Get Started</button>
          </div>
        </Link>
      </div>

      <Footer />
    </>
  );
}

export default Home;
