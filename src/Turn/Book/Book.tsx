import React from 'react';
import './Book.scss';

const Book: React.FC<{title: string, onClick: Function}> = ({title, onClick}) => {


    return (
        <div className="answer" onClick={() => onClick(title)}>
            <h4>{title}</h4>
        </div>
    )
}

export default Book;