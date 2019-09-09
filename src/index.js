import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

import App from "./components/app";
import ErrorBoundry from "./components/error-boundry";
import BookstoreService from './services/bookstore-service';
import {BookStoreServiceProvider} from "./components/book-services-context";
import store from "./store";

const bookStoreService = new BookstoreService();

ReactDom.render(
    <Provider store={store}>
        <ErrorBoundry>
            <BookStoreServiceProvider value={bookStoreService}>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </BookStoreServiceProvider>
        </ErrorBoundry>
    </Provider>,
    document.querySelector('#root'));
