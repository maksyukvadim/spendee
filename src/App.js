import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import Transactions from './views/Transactions';
import Overview from './views/Overview';
import store from './store';
import './App.css';

class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <div className="App">
                <Router>
                    <div>
                        <ul>
                            <li>
                                <Link to="/transactions">Transactions</Link>
                            </li>
                            <li>
                                <Link to="/overview">Overview</Link>
                            </li>
                        </ul>
                        <Switch>
                            <Route path="/transactions" exect component={Transactions} />
                            <Route path="/overview" exect component={Overview} />
                            <Redirect from="*" exact to="/transactions" />
                        </Switch>
                    </div>
                </Router>
            </div>
        </Provider>
    );
  }
}

export default App;
