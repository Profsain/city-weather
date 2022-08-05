import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import './index.css';
import App from './App';
import WeatherDetails from './components/WeatherDetails';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <App />} />
          <Route path="/weather" element={ <WeatherDetails />} />
        </Routes>
      </BrowserRouter>
     
    </Provider>
  </React.StrictMode>,
);
