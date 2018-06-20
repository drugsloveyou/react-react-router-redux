// import React from "react";
// import { render } from "react-dom";
// import App from "./App";

// render(<App />, document.getElementById("app"));
import React, { Component } from "react";
import { render } from "react-dom";
import {
  Router,
  Route,
  Link,
  browserHistory,
  hashHistory,
  useRouterHistory
} from "react-router";
import { createHashHistory } from "history";

const history = useRouterHistory(createHashHistory)({
  queryKey: false
});

class App extends Component {
  render() {
    return (
      <div>
        <h1>react-router</h1>
        <ul>
          <li>
            <Link to="/one">ComponentOne</Link>
          </li>
          <li>
            <Link to="/two">ComponentTwo</Link>
          </li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}

const Welcome = React.createClass({
  render() {
    return <div>这是默认欢迎页面~</div>;
  }
});

const ComponentOne = React.createClass({
  render() {
    return <div> 测试组件1 </div>;
  }
});

const ComponentTwo = React.createClass({
  render() {
    return <div> 测试组件2 </div>;
  }
});

const Test = () => <div>1111111</div>;

//路由配置
const routes = {
  path: "/",
  component: App,
  indexRoute: {
    component: Welcome
  },
  childRoutes: [
    {
      path: "one",
      component: ComponentOne
    },
    {
      path: "two",
      component: ComponentTwo
    }
  ]
};

const DOM = document.getElementById("app");

const renderDOM = () => {
  render(
    <Router history={history} routes={routes} />,DOM
  );
};

renderDOM();

if (module.hot) {
  module.hot.accept([], () => {
    renderDOM();
  });
}
