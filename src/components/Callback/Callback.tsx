import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';

const Callback: React.FC = () => {
  const { isAuthenticated, handleRedirectCallback } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    const handleAuth = async () => {
      await handleRedirectCallback();
      if (isAuthenticated) {
        navigate('/');
      }
    };

    handleAuth();
  }, [isAuthenticated, handleRedirectCallback, navigate]);

  return <div>Processing login...</div>;
};

export default Callback;
