import React from "react";
import Footer from "./Footer";
import AddTodo from "../containers/AddTodo";
import VisibleTodoList from "../containers/VisibleTodoList";
import Test from "../containers/Test";
import UndoRedo from '../containers/UndoRedo'

const App = () => (
  <div>
    <Test />
    <AddTodo />
    <VisibleTodoList />
    <Footer />
    <UndoRedo />
  </div>
);

export default App;
