import {
    BooksLoaded,
    BooksRequested,
    BookAddedToCart
} from "../actions-store";

const initState = {
    books: [],
    loader: true,
    cartItems: [],
    total: 0
};

const updateCartItems = (arr, item, idx) => {

    if(idx === -1) {
        return [
            ...arr,
            item
        ]
    }

    arr[idx] = item;

    return [...arr]
};

const updateCartItem = (book, item = {}) => {

    const {
        id = book.id,
        cnt = 0,
        title = book.title,
        price = 0
    } = item;


    return {
        id,
        title,
        cnt: cnt + 1,
        price: price + book.price
    }
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case BooksRequested : {
            return {...state,
                books: [],
                loader: true
            }
        }
        case BooksLoaded : {
            return {...state,
                books: action.payload,
                loader: false
            }
        }
        case BookAddedToCart : {
            const bookId = action.payload;
            const book = state.books.find(book => book.id === bookId);
            const bookIndex = state.cartItems.findIndex(({id}) => id === bookId);
            const item = state.cartItems[bookIndex];
            const ItemsCart = state.cartItems.slice();
            const newItem = updateCartItem(book, item);

            // if(item){
            //     newItem = {
            //         ...item,
            //         cnt: item.cnt + 1,
            //         price: item.price + book.price
            //     }
            // } else {
            //     newItem = {
            //         id: book.id,
            //         title: book.title,
            //         cnt: 1,
            //         price: book.price
            //     }
            // }

            // if(bookIndex < 0){
            //     return {...state,
            //         cartItems: [
            //             ...state.cartItems,
            //             newItem
            //         ]
            //     }
            // }
            //
            // ItemsCart[bookIndex] = newItem;

            return {...state,
                // cartItems: [
                //     ...ItemsCart,
                // ]
                cartItems: updateCartItems(ItemsCart, newItem, bookIndex)
            }
        }
        default:
            return state;
    }
};

export default reducer;