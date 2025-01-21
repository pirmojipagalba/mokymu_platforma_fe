import React from "react";
import Container from "../Container/Container";
import "./footer.scss";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <Container>
        <div className="footer__content">
          <div className="footer__contacts">
            <div className="footer__means-of-communication">
              <a className="footer__link" href="tel:+37067754737" target="_blank">
                +370 677 54737
              </a>
              <a className="footer__link" href="mailto:info@firstaid.lt" target="_blank">
                info@firstaid.lt
              </a>
            </div>
            <div className="footer__social">
              <a className="footer__link" target="_blank" href="https://www.facebook.com/firstaidlt">
                <img
                  className="footer__social-icon"
                  src="/assets/fb.svg"
                  alt="facebook"
                />
              </a>

              <a className="footer__link" target="_blank" href="https://www.instagram.com/firstaid.lt/">
                <img
                  className="footer__social-icon"
                  src="/assets/ig.svg"
                  alt="instagram"
                />
              </a>

              <a className="footer__link" target="_blank" href="https://www.linkedin.com/company/first-aid-lt/">
                <img
                  className="footer__social-icon"
                  src="/assets/linkedin.svg"
                  alt="linkedin"
                />
              </a>
            </div>
          </div>
          <p>
            &copy; {new Date().getFullYear()} Firstaid.lt. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
