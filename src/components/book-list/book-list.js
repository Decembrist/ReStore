import React, {Component} from 'react';
import {connect} from "react-redux";
import {withBSS} from '../hoc';
import {bookFetch, bookAddedToCart} from '../../actions';
import {compose} from "../../utils";

import './book-list.css';
import BookItem from "../book-item";
import Loader from "../loader/loader";


class BookList extends Component {

    componentDidMount() {
        this.props.bookFetch();
    }

    render() {
        const {books, loader, bookAddedToCart} = this.props;

        if(loader){
            return <Loader/>
        }

        return (
            <ul className="book-list">
                {books.map(book => {
                    return <li key={book.id}>
                        <BookItem
                            bookAddedToCart={()=>bookAddedToCart(book.id)}
                            books={book}/>
                    </li>
                })}
            </ul>
        );
    }
}
const mapStateToProps = ({books, loader}) => ({books, loader});
const mapDispatchToProps = (dispatch, {bookstoreService}) => ({
    bookFetch: bookFetch(bookstoreService, dispatch),
    bookAddedToCart: (id) => dispatch(bookAddedToCart(id))
});
export default compose(
    withBSS(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookList);

// export default withBSS()(
//     connect(mapStateToProps, mapDispatchToProps)(BookList)
// );