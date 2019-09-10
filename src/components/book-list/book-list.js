import React, {Component} from 'react';
import BookItem from "../book-item";
import {connect} from "react-redux";
import {withBSS} from '../hoc';
import {booksLoaded} from '../../actions';
import {compose} from "../../utils";




class BookList extends Component {


    componentDidMount() {
        const {bookstoreService, booksLoaded} = this.props;
        booksLoaded(bookstoreService.getBooks());
    }

    render() {
        const {books} = this.props;
        return (
            <ul>
                {books.map(book => {
                    return <li key={book.id}><BookItem books={book}/></li>
                })}
            </ul>
        );
    }
}
const mapStateToProps = ({books}) => ({books});
// const mapDispatchToProps = (dispatch) => {
//     return {
//         booksLoaded: (newBooks) => dispatch(booksLoaded(newBooks))
//
//     }
// };
const mapDispatchToProps = {
    booksLoaded
};
// export default compose(
//     withBSS(),
//     connect(mapStateToProps, mapDispatchToProps)
// )(BookList);

export default withBSS()(
    connect(mapStateToProps, mapDispatchToProps)(BookList)
);