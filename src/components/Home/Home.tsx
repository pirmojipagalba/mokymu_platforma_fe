import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LogoutButton from '../Logout/Logout';

const Home: React.FC = () => {
  const { isAuthenticated, loginWithRedirect, user } = useAuth0();

  return (
    <div>
      <h2>Welcome to Our App</h2>
      {!isAuthenticated && (
        <button onClick={() => loginWithRedirect()}>Log In</button>
      )}
      {isAuthenticated && (
        <>
          <p>Hello, {user?.name}! You are logged in.</p>
          <p>Navigate to your <a href="/profile">Profile</a> to see your details.</p>
          <LogoutButton />
        </>
      )}
    </div>
  );
};

export default Home