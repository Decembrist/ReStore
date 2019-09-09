import {BooksLoaded} from "../action-store";

const booksLoaded = (newBooks) => {
    return {
        type: BooksLoaded,
        payload: newBooks
    }
};

export {
    booksLoaded
}