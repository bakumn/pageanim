import './sass/main.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home.jsx';
import ListPage from './ListPage.jsx';
import ItemDetailPage from './ItemDetailPage.jsx';
// import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { BrowserRouter as Router, Route, Switch, browserHistory } from "react-router-dom";

ReactDOM.render(
  <Router history={browserHistory}>
      <Home>
          <Route exact path="/" component={ListPage} />
          <Route path="/detail/:itemId" component={ItemDetailPage} />
      </Home>
  </Router>, document.getElementById('root'));
