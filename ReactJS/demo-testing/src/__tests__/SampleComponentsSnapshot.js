import React from 'react';
import { configure, shallow } from 'enzyme';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';
import SampleComponent from '../SampleComponent';
import toJson from 'enzyme-to-json';

configure({ adapter: new ReactSixteenAdapter() })

describe('Testing sampleComponent with snapshot', () => {
    it('renders correctly enzyme', () => {
        const wrapper = shallow(<SampleComponent />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
})
