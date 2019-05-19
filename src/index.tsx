import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Authors from './Author-Data';
import { shuffle, sample } from 'underscore';

const getTurnData  = (authors: any) => {
    // generate a list of all possible books
    const allBooks = authors.reduce((acc, val) => {
        // accomplished by concating all sub arrays into an empty array
        return acc.concat(val.books);
    }, []);

    // shuffles the books and take the first four
    const books = shuffle(allBooks).slice(0, 4);
    // pick one at random
    const answer = sample(books);
    
    // return the 4 books and used the random one to find its author
    return {
        books: books,
        author: authors.find( author => author.books.includes(answer))
    }

}

const state = {
    turnData: getTurnData(Authors),
    highlight: '' 
};

const validateAuthor = (answer: string) => {
    const isCorrect = state.turnData.author.books.includes(answer);
    state.highlight =  isCorrect;
    render();
}

const render = () => {
    ReactDOM.render(<App {...state} onAnswerSelected={validateAuthor}/>, document.getElementById('root'));
}

render();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
