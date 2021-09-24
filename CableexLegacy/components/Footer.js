import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <section className="social-media">
        <div className="social-media-wrap">
          {/* <div className="footer-logo">
                        <Link to='/' className="social-logo">
                            <img className="footer-logo" src="../assets/logo-1.png" alt=''></img>
                        </Link>
                    </div> */}

          <div className="social-icons">
            <a className="social-icon-link facebook" href="#!">
              <i className="fab fa-facebook f" />
            </a>

            <a
              className="social-icon-link instagram"
              href="https://www.instagram.com/cableex_denco/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram" />
            </a>

            <a
              className="social-icon-link instagram"
              href="https://www.linkedin.com/company/cableex"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin" />
            </a>
          </div>

          <div className="website-rights">
            <a href="/privacypolicy">Privacy Policy</a>
          </div>
          <div className="website-rights">CableEx © 2020-2021</div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
