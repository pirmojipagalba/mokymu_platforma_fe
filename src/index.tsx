import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
import { authConfig } from './authConfig';
import './styles/main.scss';
import './index.scss';
import { AppProvider } from './context/AppContext';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Auth0Provider
    domain={authConfig.domain || ''}
    clientId={authConfig.clientId || ''}
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <AppProvider>
      <App />
    </AppProvider>
  </Auth0Provider>
);