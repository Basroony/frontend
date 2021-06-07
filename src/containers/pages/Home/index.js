import React from 'react';
import './home.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Login from '../Login';
import Register from '../Register';
import Dashboard from '../Dashboard';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

function App(){
    let user;
    return (
        <div className="app">
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Dashboard/>
                    </Route>
                    <Route path="/login">
                        <Login/>
                    </Route>
                    <Route path="/signup">
                        <Register/>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;