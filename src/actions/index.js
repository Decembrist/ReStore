import {BooksLoaded, BooksRequested} from "../actions-store";

const booksLoaded = (newBooks) => {
    return {
        type: BooksLoaded,
        payload: newBooks
    }
};

const booksRequested = () => ({type: BooksRequested});

const bookFetch = (bookService, dispatch ) => () => {
    dispatch(booksRequested());
    bookService.getBooks()
        .then((data) => dispatch(booksLoaded(data)))
};

export {
    bookFetch
}