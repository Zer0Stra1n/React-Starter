import React, { ReactElement } from 'react';
import { shallow } from 'enzyme';
import Sample from './Sample';

describe('Sample Component', () => {
    describe('when tested directly', () => {
        let result: ReactElement;
        beforeAll(() => {
            result = Sample({});
        });

        it('returns a value', () => {
            expect(result).not.toBeNull();
        });
        it('returns a button', () => {
            expect(result.type).toBe('button');
        })
    });
    describe('when rendered', () => {
        it('does not crash', () => {
            shallow(<Sample />)
        })
        it('render as a button', () => {
            let wrapper = shallow(<Sample />);
            expect(wrapper.find('button')).toHaveLength(1);
        })
    })
});
