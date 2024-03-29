import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Contional_render } from './Conditional_Rendering';

const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(<Contional_render isGoal={false} />);

  root.render(
    <React.StrictMode>
      <App />
  </React.StrictMode>
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
