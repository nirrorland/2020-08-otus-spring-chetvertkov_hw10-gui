import React from 'react'
import ReactDOM from 'react-dom'
import App from './modules/App'
import { BrowserRouter } from "react-router-dom";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import Book from "./modules/Book";
import Author from "./modules/Author";
import Genre from "./modules/Genre";
import BookAdd from "./modules/BookAdd";
import BookUpdate from "./modules/BookUpdate";
import Login from "./modules/Login";
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/Book" component={Book} />
            <Route exact path="/Book/BookUpdate" component={BookUpdate}/>
			<Route exact path="/Book/Add" component={BookAdd} />
            <Route exact path="/Author" component={Author} />
            <Route exact path="/Genre" component={Genre} />
			<Route exact path="/Login" component={Login} />

        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
);