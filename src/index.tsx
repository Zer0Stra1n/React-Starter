import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { shuffle, sample } from 'underscore';

const authors = [
    {
        name: 'Mark Twain',
        imageURL: 'images/authors/MarkTwain.jpg',
        imageSource: 'Wikimedia Commons',
        books: ['The Adventures of Huckleberry Finn', 'Eve\'s Diary', 'The Mysterious Stranger']
    },
    {
        name: 'Stephen King',
        imageURL: 'images/authors/StephenKing.png',
        imageSource: 'Wikimedia Commons',
        books: ['Pet Semetary', 'IT', 'The Outsider']
    },
    {
        name: 'William Shakespeare',
        imageURL: 'images/authors/WilliamShakespeare.jpg',
        imageSource: 'Wikimedia Commons',
        books: ['MacBeth', 'The Tempest', 'Hamlet']
    },
    {
        name: 'H.P. Lovecraft',
        imageURL: 'images/authors/HPLovecraft.jpg',
        imageSource: 'Wikimedia Commons',
        books: ['The Call of Cthulhu', 'The Shadow over Innsmouth', 'The Dunwich Horror']
    },
    {
        name: 'Charles Dickens',
        imageURL: 'images/authors/CharlesDickens.png',
        imageSource: 'Wikimedia Commons',
        books: ['The Old Curiosity Shop', 'Bleak House', 'The Battle of Life']
    }
];

const getTurnData  = (authors) => {
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
    turnData: getTurnData(authors),
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
