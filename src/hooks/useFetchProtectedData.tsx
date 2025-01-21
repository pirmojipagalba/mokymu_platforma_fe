import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import { useEffect } from 'react';

export const useFetchProtectedData = () => {
  const { isAuthenticated, getIdTokenClaims } = useAuth0();

  useEffect(() => {
    const fetchProtectedData = async () => {
      if (isAuthenticated) {
        try {
          const token = await getIdTokenClaims();
          if (token) {
            const response = await axios.get('http://localhost:3001/protected', {
              headers: {
                Authorization: `Bearer ${token.__raw}`
              }
            });
            console.log(response.data);
          } else {
            console.error('Token is undefined');
          }
        } catch (error) {
          console.error('Error fetching protected data:', error);
        }
      }
    };

    fetchProtectedData();
  }, [isAuthenticated, getIdTokenClaims]);
};
