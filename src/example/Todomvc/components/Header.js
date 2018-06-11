import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoTextInput from './TodoTextInput';

export default class Header extends Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired
  };

  handleSave(text) {
    if (text.length !== 0) {
      this.props.addTodo(text);
    }
  }
  /**
   * [ES7语法 function-bind]了解一下
   * obj::func
   * 相当于
   * func.bind(obj)
   *
   * ::obj.func
   * 相当于
   * obj.func.bind(obj)
   *
   * obj::func(val)
   * 相当于
   * func.call(obj, val)
   *
   * ::obj.func(val)
   * 相当于
   * obj.func.call(obj, val)
   *
   */
  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <TodoTextInput
          newTodo={true}
          onSave={text => this.handleSave(text)}
          placeholder="What needs to be done?"
        />
      </header>
    );
  }
}
