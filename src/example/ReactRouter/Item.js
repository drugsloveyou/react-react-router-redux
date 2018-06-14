import React, { Component } from 'react';
const Log = msg => {
  console.log(
    `%c ${msg} `,
    `background-color: aqua; color: black;font-size: 20px`
  );
};

class Item extends Component {
  state = {
    test: 1
  };

  static defaultProps = {
    count: 'defaultProps'
  };
  
  constructor(props) {
    super(props);
    Log(`props: => ${JSON.stringify(this.props)}`);
    Log(`state: => ${JSON.stringify(this.state)}`);

    Log('constructor');
  }

  componentWillMount() {
    Log('componentWillMount');
  }

  componentDidMount() {
    Log('componentDidMount');
  }

  componentWillUnmount() {
    Log('componentWillUnmount');
  }

  componentWillReceiveProps() {
    Log('componentWillReceiveProps');
  }

  shouldComponentUpdate() {
    Log('shouldComponentUpdate');
    return true;
  }

  componentWillUpdate() {
    Log('componentWillUpdate');
  }

  componentDidUpdate() {
    Log('componentDidUpdate');
  }

  render() {
    Log('render');
    return (
      <div id="item">
        <h3
          onClick={() => {
            this.setState({ test: this.state.test + 1 });
          }}
        >
          改变State
        </h3>
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
    // count: 0
  };

  render() {
    return (
      <div>
        <h3
          onClick={() => {
            this.setState({
              count: this.state.count ? this.state.count + 111 : 111
            });
          }}
        >
          改变props
        </h3>

        <Item count={this.state.count} />
      </div>
    );
  }
}
