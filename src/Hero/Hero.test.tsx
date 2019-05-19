import React from 'react';
import { shallow } from 'enzyme';
import Hero from './Hero';

describe('Hero Component', () => {
    describe('when rendered', () => {
        it('does not crash', () => {
            shallow(<Hero />);
        })
    });
});