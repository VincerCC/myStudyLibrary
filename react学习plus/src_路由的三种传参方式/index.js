import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom';

// import { HashRouter as Router } from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
    {/* 使用Router包裹根组件 */}
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

