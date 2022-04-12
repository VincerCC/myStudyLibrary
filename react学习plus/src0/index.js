import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import IfDom from "./page/条件渲染/index.jsx";
import ListDom from "./page/列表渲染/index.jsx";
import Ref from "./page/ref/index.jsx";
import Parents from './page/组件通信context/parent.jsx';
import SlotParents from './page/插槽/Parent.jsx';
import Props from './page/props校验/index.jsx';
import LifeCycle from './page/生命周期/index.jsx';
import WithHOCComponent from './page/高阶组件/HOC.jsx';
import WithRenderPropsComponent from './page/高阶组件/RenderProps.jsx';
ReactDOM.render(
  <React.StrictMode>
    <IfDom />
    <hr/>
    <ListDom />
    <hr />
    <Ref />
    <hr />
    <Parents />
    <hr />
    <SlotParents />
    <hr />
    <Props />
    <hr />
    <LifeCycle />
    <hr />
    <WithHOCComponent />
    <hr />
    <WithRenderPropsComponent />

  </React.StrictMode>,
  document.getElementById('root')
);

