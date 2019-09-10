import React, {Component} from 'react';
import {connect} from "react-redux";
import {withBSS} from '../hoc';
import {bookFetch} from '../../actions';
import {compose} from "../../utils";

import './book-list.css';
import BookItem from "../book-item";
import Loader from "../loader/loader";


class BookList extends Component {

    componentDidMount() {
        this.props.bookFetch();
    }

    render() {
        const {books, loader} = this.props;
        if(loader){
            return <Loader/>
        }
        return (
            <ul className="book-list">
                {books.map(book => {
                    return <li key={book.id}><BookItem books={book}/></li>
                })}
            </ul>
        );
    }
}
const mapStateToProps = ({books, loader}) => ({books, loader});
const mapDispatchToProps = (dispatch, {bookstoreService}) => {
    return {
        bookFetch: bookFetch(bookstoreService, dispatch)
    }
};
export default compose(
    withBSS(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookList);

// export default withBSS()(
//     connect(mapStateToProps, mapDispatchToProps)(BookList)
// );