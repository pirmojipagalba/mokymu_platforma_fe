import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Profile: React.FC = () => {
  const { user, isAuthenticated } = useAuth0();

  if (!isAuthenticated) {
    return <div>Please log in to view your profile.</div>;
  }

  return (
    <div>
      <h2>Profile</h2>
      <img src={user?.picture} alt={user?.name} />
      <h3>{user?.name}</h3>
      <p>Email: {user?.email}</p>
      {/* Add any other user information you'd like to display */}
    </div>
  );
};

export default Profile;
