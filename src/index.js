import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Root = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
        </Switch>
    </Router>
)

ReactDOM.render(<Root />, document.getElementById("root"));
registerServiceWorker();
