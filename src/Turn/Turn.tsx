import React from 'react';
import './Turn.scss';
import Book from './Book/Book';

const Turn:React.FC<{author: any, books: string[], highlight: string, onAnswerSelected: Function}> = ({author, books, highlight, onAnswerSelected}) => {
    
const highlightColor = (onClick) => {
    const mapping = {
        '': '',
        true: 'correct',
        false: 'wrong'
    }
    
    return mapping[highlight];
}
return (
    <div className={`row turn bkgd-white ${highlightColor(highlight)}`}>
        <div className="author-container col-4 offset-1">
            <img src={author.imageURL} className="author-image" alt="Author"></img>
        </div>
        <div className="col-6">
            {books.map(title => <Book title={title} key={title} onClick={onAnswerSelected}/>)}
        </div>
    </div>
 );
}

export default Turn;