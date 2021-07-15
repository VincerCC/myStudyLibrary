import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import IfDom from "./page/条件渲染/index.jsx";
import ListDom from "./page/列表渲染/index.jsx";

ReactDOM.render(
  <React.StrictMode>
    <IfDom />
    <hr/>
    <ListDom />
  </React.StrictMode>,
  document.getElementById('root')
);

