import {
    BooksLoaded,
    BooksRequested,
    BookAddedToCart,
    BookDeleteToCart,
    BookUpdateToCart
} from "../actions-store";

const initState = {
    books: [],
    loader: true,
    cartItems: [],
    total: 0
};

const updateCartItems = (arr, item, idx) => {

    if(!item.cnt) {
        return [
            ...arr.slice(0, idx),
            ...arr.slice(++idx)
        ];
    }

    if(idx === -1) {
        return [
            ...arr,
            item
        ]
    }

    arr[idx] = item;

    return [...arr]
};

const updateCartItem = (book, item = {}, quantity) => {

    const {
        id = book.id,
        cnt = 0,
        title = book.title,
        price = 0
    } = item;


    return {
        id,
        title,
        cnt: cnt + quantity,
        price: price + book.price*quantity
    }
};

const updateOrder = (state, bookId, quantity) => {

    const {books, cartItems} = state;

    const book = books.find(book => book.id === bookId);

    const bookIndex = cartItems.findIndex(({id}) => id === bookId);
    const item = cartItems[bookIndex];
    const ItemsCart = cartItems.slice();
    const newItem = updateCartItem(book, item, quantity);
    console.log(newItem);
    return {...state,
        cartItems: updateCartItems(ItemsCart, newItem, bookIndex)
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
            // const bookId = action.payload;
            // const book = state.books.find(book => book.id === bookId);
            // const bookIndex = state.cartItems.findIndex(({id}) => id === bookId);
            // const item = state.cartItems[bookIndex];
            // const ItemsCart = state.cartItems.slice();
            // const newItem = updateCartItem(book, item);

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

            // return {...state,
                // cartItems: [
                //     ...ItemsCart,
                // ]
                // cartItems: updateCartItems(ItemsCart, newItem, bookIndex)
            // }
            return updateOrder(state, action.payload, 1)
        }
        case BookUpdateToCart : {
            return updateOrder(state, action.payload, -1)
        }
        case BookDeleteToCart : {
            const book = state.books.find(book => book.id === action.payload);
            return updateOrder(state, action.payload, -book.cnt)
        }
        default:
            return state;
    }
};

export default reducer;