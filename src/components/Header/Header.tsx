import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import LogoutButton from "../Logout/Logout";
import Container from "../Container/Container";
import "./header.scss";

const Header: React.FC = () => {
  const { user, isAuthenticated } = useAuth0();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 769);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 769);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleLogoClick = () => {
    navigate("/dashboard");
  };

  return (
    <header className={`header ${isScrolled ? "header--scrolled" : ""}`}>
      <Container>
        <div className="header__container">
          <img
            className={`header__logo ${isSmallScreen ? "header__logo--small" : ""}`}
            src={isSmallScreen ? "/assets/icon_blue.svg" : "/assets/logo-blue.svg"}
            alt="logo"
            onClick={handleLogoClick}
          />
          <nav className="header__navigation">
            {isAuthenticated && (
              <>
                <span className="header__welcome-message">
                  {isSmallScreen ? '' : 'Sveiki, '}<span className="header__user-name">{user?.name}</span>!
                </span>
                <LogoutButton />
              </>
            )}
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Header;
