import React from 'react';
import './Book.scss';

const Book: React.FC<{title: string}> = ({title}) => {
    return (
        <div className="answer">
            <h4>{title}</h4>
        </div>
    )
}

export default Book;