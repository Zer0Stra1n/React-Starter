import React from 'react';
import { shallow } from 'enzyme';
import Book from './Book';

describe('Book Component', () => {
    describe('when rendered', () => {
        it('does not crash', () => {
            shallow(<Book title={'Test'} onClick={console.log}/>);
        });
        it('constains a title', () => {
           const wrapper = shallow(<Book title={'Test'} onClick={console.log}/>);
           expect(wrapper.find('h4')).toHaveLength(1);
           expect(wrapper.find('h4').text()).toEqual('Test');
        });
        it('fires a click function onClick', () => {
            const testFn = jest.fn();
            const wrapper = shallow(<Book title={'Test'} onClick={testFn}/>);
            wrapper.find('.answer').simulate('click');
            expect(testFn).toHaveBeenCalledTimes(1);
            expect(testFn).toBeCalledWith('Test');
        });
    });
});