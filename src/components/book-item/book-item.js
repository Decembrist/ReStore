import React from 'react';
import './book-item.css';

const BookItem = ({books}) => {
    const {title, author, price, imgSrc} = books;
    return (
        <div className="book-list-item">
            <div className="book-cover">
                <img src={imgSrc} alt="cover"/>
            </div>
            <div className="book-details">
                <a href="/" className="book-title">{title}</a>
                <div className="book-author">{author}</div>
                <div className="book-price">${price}</div>
                <button type="button" className="btn btn-info add-to-cart">Add to cart</button>
            </div>
        </div>
    );
};

export default BookItem;