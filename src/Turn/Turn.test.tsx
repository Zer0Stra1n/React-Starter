import React from 'react';
import { shallow } from 'enzyme';
import Turn from './Turn';

const testProps = {
    author: {
        name: 'H.P. Lovecraft',
        imageURL: 'images/authors/HPLovecraft.jpg',
        imageSource: 'Wikimedia Commons',
        books: ['The Call of Cthulhu', 'The Shadow over Innsmouth', 'The Dunwich Horror']
    },
    books: ['The Call of Cthulhu', 'MacBeth', 'Bleak House', 'IT'],
    highlight: ''
}

describe('Turn Component', () => {
    describe('when rendered', () => {
        let wrapper;
        beforeAll(() => {
            wrapper = shallow(<Turn {...testProps} onAnswerSelected={console.log}/>);
        });

        it('should contain 4 possible answers', () => {
            expect(wrapper.find('Book')).toHaveLength(4);
        });
        it('should contain an image of HP Lovecraft', () => {
            expect(wrapper.find('img').prop('src')).toEqual('images/authors/HPLovecraft.jpg');
        });
    });
});