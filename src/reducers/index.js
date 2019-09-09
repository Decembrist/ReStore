import {BooksLoaded} from "../action-store";

const initState = {
    books: []
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case BooksLoaded : {
            return {
                books: action.payload
            }
        }
        default:
            return state;
    }
};

export default reducer;