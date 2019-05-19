import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('Footer Component', () => {
    describe('when rendered', () => {
        it('does not crash', () => {
            shallow(<Footer />);
        })
    });
});