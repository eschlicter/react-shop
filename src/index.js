import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'gestalt/dist/gestalt.css';

//Components
import App from './components/App';
import Signin from './components/signin';
import Signup from './components/signup';
import Checkout from './components/checkout';
import Navbar from './components/navbar';
//End Components

import * as serviceWorker from './serviceWorker';

const Root = () => (
    <Router>
        <Navbar />
        <Switch>
            <Route component={App} exact path="/" />
            <Route component={Signin} path="/signin" />
            <Route component={Signup} path="/signup" />
            <Route component={Checkout} path="/checkout" />
        </Switch>
    </Router>
)

ReactDOM.render(<Root />, document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
