import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, browserHistory } from "react-router-dom";
import Home from './Home';
import ListPage from './ListPage';
import ItemDetailPage from './ItemDetailPage';
import AppStyle from './sass/app.scss';

ReactDOM.render(
    <Router history={browserHistory}>
        <Switch>
            <Home>
                <Route exact path="/" component={ListPage} />
                <Route path="/detail/:itemId" component={ItemDetailPage} />
            </Home>
         </Switch>
    </Router>,
    document.getElementById('root')
);
