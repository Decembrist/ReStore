import React, {Fragment} from 'react';

const BookItem = ({books}) => {
    const {title, author} = books;
    return (
        <Fragment>
            <span>{title}</span>
            <span>{author}</span>
        </Fragment>
    );
};

export default BookItem;