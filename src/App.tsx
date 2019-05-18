import React from 'react';
import Hero from './Hero/Hero';
import Turn from './Turn/Turn';
import Continue from './Continue/Continue';
import Footer from './Footer/Footer';
import './App.scss';

const App = ({turnData, highlight, onAnswerSelected}) => {
  return (
    <div className="container-fluid">
      <Hero />
      <Turn {...turnData} highlight={highlight} onAnswerSelected={onAnswerSelected}/>
      <Continue />
      <Footer />
    </div>
  );
}

export default App;
