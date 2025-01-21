import { useAuth0 } from "@auth0/auth0-react";
import "./logout.scss";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
      className="logout"
    >
      <img
        className="logout__image"
        src="/assets/logout.svg"
        alt="logout"
      />
    </button>
  );
};

export default LogoutButton;
