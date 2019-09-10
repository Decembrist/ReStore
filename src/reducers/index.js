import {BooksLoaded, BooksRequested} from "../actions-store";

const initState = {
    books: [],
    loader: true
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case BooksRequested : {
            return {
                books: [],
                loader: true
            }
        }
        case BooksLoaded : {
            return {
                books: action.payload,
                loader: false
            }
        }
        default:
            return state;
    }
};

export default reducer;