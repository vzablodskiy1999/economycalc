import React from 'react';
import './App.scss';
import Header from "./containers/Header";
import {BrowserRouter, Route} from "react-router-dom";
import {Switch} from "react-router";
import {Homepage} from "./templates/Homepage/Homepage";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
            </div>
            <Switch>
                <Route path="">
                    <Homepage/>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
