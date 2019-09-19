import {
    BooksLoaded,
    BooksRequested,
    BookAddedToCart,
    BookDeleteToCart,
    BookUpdateToCart
} from "../actions-store";

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

const bookAddedToCart = (bookId) => ({
    type: BookAddedToCart,
    payload: bookId
});

const bookDeleteToCart = (bookId) => ({
    type: BookDeleteToCart,
    payload: bookId
});

const bookUpdateToCart = (bookId) => ({
    type: BookUpdateToCart,
    payload: bookId
});

export {
    bookFetch,
    bookAddedToCart,
    bookDeleteToCart,
    bookUpdateToCart
}