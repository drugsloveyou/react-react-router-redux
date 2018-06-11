import React, { Component } from "react";
import { render } from "react-dom";
import list from "./list";

class HomeWorkItem extends Component {
  render() {
    return (
      <li>
        {this.props.name}：<a href={this.props.github} target="_blank">
          {this.props.github ? (
            this.props.github
          ) : (
            <span style={{ backgroundColor: "gray", color: "white" }}>
              没交哦~
            </span>
          )}
        </a>
      </li>
    );
  }
}

const App = ({ list = [] }) => (
  <ul>
    {list.map((item, index) => (
      <HomeWorkItem name={item.name} github={item.github} key={index} />
    ))}
  </ul>
);

render(<App list={list} />, document.getElementById("app"));
