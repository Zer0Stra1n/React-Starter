import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';

const state = {
  turnData: {
    author: {
      name: 'H.P. Lovecraft',
      imageURL: 'images/authors/HPLovecraft.jpg',
      imageSource: 'Wikimedia Commons',
      books: ['The Call of Cthulhu', 'The Shadow over Innsmouth', 'The Dunwich Horror']
    },
    books: ['The Call of Cthulhu', 'MacBeth', 'Bleak House', 'IT']
  },
  highlight: ''
};

describe('App Component', () => {
  describe('when rendered', () => {
    let wrapper;
    beforeAll(() => {
      wrapper = shallow(<App {...state} onAnswerSelected={console.log}/>);
    })
    it('should contain 1 Hero', () => {
      expect(wrapper.find('Hero')).toHaveLength(1);
    });
    it('should contain 1 Footer', () => {
      expect(wrapper.find('Footer')).toHaveLength(1);
    });
    it('should contain 1 Turn', () => {
      expect(wrapper.find('Turn')).toHaveLength(1);
    });
  });
});

describe('Integration Functionality', () => {
  describe('when no answer is selected', () => {
    let wrapper;
    beforeAll(() => {
      wrapper = mount(<App {...state} onAnswerSelected={console.log}/>);
    });

    it('should have no background color', () => {
      expect(wrapper.find('div.row.turn').hasClass('correct')).toBe(false);
      expect(wrapper.find('div.row.turn').hasClass('wrong')).toBe(false);
    });
  });
  describe('when the wrong answer is selected', () => {
    let wrapper;
    beforeAll(() => {
      // object assign shallow clones objects and can overwrite if keys are the same, this alters the first arg
      wrapper = mount(<App {...(Object.assign({}, state, {highlight: false}))} onAnswerSelected={console.log}/>);
    });
    it('should have a red background color', () => {
      expect(wrapper.find('div.row.turn').hasClass('correct')).toBe(false);
      expect(wrapper.find('div.row.turn').hasClass('wrong')).toBe(true);
    });
  });
  describe('when the correct answer is selected', () => {
    let wrapper;
    beforeAll(() => {
      wrapper = mount(<App {...(Object.assign({}, state, {highlight: true}))} onAnswerSelected={console.log}/>);
    });
    it('should have a green background color', () => {
      expect(wrapper.find('div.row.turn').hasClass('correct')).toBe(true);
      expect(wrapper.find('div.row.turn').hasClass('wrong')).toBe(false);
    });
  });
  describe('when an answer is selected', () => {
    let wrapper;
    const handlAnswerSelected = jest.fn();
    beforeAll(() => {
      wrapper = mount(<App {...state} onAnswerSelected={handlAnswerSelected}/>);
      wrapper.find('.answer').first().simulate('click');
    });

    it('should trigger the onAnswerSelected function', () => {
      expect(handlAnswerSelected).toHaveBeenCalled();
    });
    it('should be triggered with The Call of Cthulhu', () => {
      expect(handlAnswerSelected).toHaveBeenCalledWith('The Call of Cthulhu');
    })
  });
});

