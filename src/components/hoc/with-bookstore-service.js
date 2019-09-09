import React from 'react';
import {BookStoreServiceConsumer} from '../book-services-context';


const withBSS = () => (Wrapped) => {
    return (props) => {
        return (
            <BookStoreServiceConsumer>
                {(bookstoreService)=>{
                    return <Wrapped {...props}
                                    bookstoreService={bookstoreService}/>
                }}
            </BookStoreServiceConsumer>
        )
    }
};

export default withBSS;