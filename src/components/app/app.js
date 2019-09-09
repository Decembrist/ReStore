import React from 'react';
import './app.css';
import {withBSS} from "../hoc";


const App = ({bookstoreService}) => {
    console.log(bookstoreService.getBooks());
    return (
        <div>Hello!!!</div>
    )
};

export default withBSS()(App);