import React from 'react';
import { Router, Route, hashHistory, browserHistory, Link } from 'react-router';

import Item from './Item';

// const Item = props => <div>{console.log(props)}Item</div>;

const New = props => <div>{console.log(props)}New</div>;

const Test = props => <div>{console.log(props)}Test</div>;

const Root = ({ children }) => (
  <div>
    <ul>
      <li>
        <Link to="/item/test?id=111">path/to/Item</Link>
      </li>
      <li>
        <Link to="/new/1.1">path/to/New</Link>
      </li>
      <li>
        <Link to="/test" query={{ j: 1 }} hash="#test">
          path/to/Test
        </Link>
      </li>
    </ul>
    Root{children}
  </div>
);

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Router history={browserHistory}>
          <Route path="/" component={Root}>
            <Route path="item(/:id)" component={Item} />
            <Route path="new/*.*" component={New} />
            <Route path="test" component={Test} />
          </Route>
        </Router>
      </div>
    );
  }
}
