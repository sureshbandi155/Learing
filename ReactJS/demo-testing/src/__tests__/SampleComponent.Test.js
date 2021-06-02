import React from 'react';
import { configure, shallow } from 'enzyme';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';
import SampleComponent from '../SampleComponent';

configure({ adapter: new ReactSixteenAdapter() })

describe('Testing sampleComponent', () => {
    it('Sholud show text', () => {
        const wrapper = shallow(<SampleComponent />)
        const myText = wrapper.find('div')
        expect(myText.text()).toBe('Sample Text')
    })
})
