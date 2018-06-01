const React = require("react");
const ReactDOM = require("react-dom");
const App = require("./components/App");
import Redux from "redux";
import "./css/common.css";

const DOM = document.getElementById("app");

ReactDOM.render(<App />, DOM);
