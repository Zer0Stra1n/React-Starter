import React from 'react';
import './Turn.scss';
import Book from './Book/Book';

const Turn:React.FC<{author: any, books: string[]}> = ({author, books}) => {
 return (
    <div className="row turn bkgd-white">
        <div className="author-container col-4 offset-1">
            <img src={author.imageURL} className="author-image" alt="Author"></img>
        </div>
        <div className="col-6">
            {books.map(title => <Book title={title} key={title}/>)}
        </div>
    </div>
 );
}

export default Turn;