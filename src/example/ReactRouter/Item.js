import React, { Component } from 'react';

class Item extends Component {
  state = {
    test: 1
  };

  static defaultProps = {
    count: 'defaultProps'
  };

  constructor(props) {
    super(props);
    console.log('constructor');
  }

  componentWillMount() {
    console.log('componentWillMount');
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  componentWillReceiveProps() {
    console.log('componentWillReceiveProps');
  }

  shouldComponentUpdate() {
    console.log('shouldComponentUpdate');
    return true;
  }

  componentWillUpdate() {
    console.log('componentWillUpdate');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  render() {
    console.log('render');
    return (
      <div
        id="item"
        onClick={() => {
          this.setState({ test: this.state.test + 1 });
        }}
      >
        <hr />
        {/*console.log(this.props)*/}Item: {this.state.test}
        <br />
        defaultProps: {this.props.count}
      </div>
    );
  }
}

export default class List extends Component {
  state = {
    count: 111
  };

  render() {
    return (
      <div>
        <h4
          onClick={() => {
            this.setState({
              count: this.state.count + 111
            });
          }}
        >
          改变props
        </h4>
        <h4
          onClick={() => {
            throw new Error('呵呵');
          }}
        >
          错误
        </h4>

        <Item count={this.state.count} />
      </div>
    );
  }
}
