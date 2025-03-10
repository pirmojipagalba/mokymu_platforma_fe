import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Container from "../Container/Container";
import "./login.scss";

const Login: React.FC = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Container type="wide">
      <div className="login">
        <h2 className="login__heading">
          Sveiki atvykę į "Firstaid.lt" testų platformą. Prisijunkite norėdami
          pasiekti savo medžiagą.
        </h2>
        <button className={"login__button"} onClick={() => loginWithRedirect()}>
          Prisijungti
        </button>
      </div>
    </Container>
  );
};

export default Login;
