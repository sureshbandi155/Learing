import React from 'react';
import { configure, mount, shallow } from 'enzyme';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';
import App from './App';
import SampleComponent from './SampleComponent';

configure({ adapter: new ReactSixteenAdapter() })

let wrapper;
beforeEach(() => {
    wrapper = shallow(<App />)
});
//mount is used to get the other componenet in the App component.


describe('App component is redering', () => {
    it('Should render 1 <p>', () => {
        expect(wrapper.find('p')).toHaveLength(1)
    });
    it('Should render 1 SampleComponent <p>', () => {
        expect(wrapper.find(SampleComponent)).toHaveLength(1)
    });
    // it('Should render 2 <div>', () => {
    //     expect(wrapper.find('div')).toHaveLength(1)
    // });

});


