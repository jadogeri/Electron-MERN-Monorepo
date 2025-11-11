import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
 import { Provider } from 'react-redux';
import { store } from './client/redux/store';
import { AuthProvider } from './client/contexts/dataContexts/AuthContext';
import { AppProvider } from './client/contexts/dataContexts/AppContext';
import { UserProvider } from './client/contexts/dataContexts/UserContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <UserProvider>
    <AppProvider>
      <AuthProvider>
    <Provider store={store}>
      <App />
    </Provider>
          </AuthProvider>
    </AppProvider>
    </UserProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

