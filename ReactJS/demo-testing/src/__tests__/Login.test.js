import React from 'react';
import { configure, shallow } from 'enzyme';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';
import Login from '../Login';

configure({ adapter: new ReactSixteenAdapter() })

describe('Login test suits', () => {
    it('Sholud render form', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find('form.login').exists()).toBe(true)
        expect(wrapper.find('#email').length).toEqual(1)
        expect(wrapper.find('#password').length).toEqual(1)
    })
});

describe('Email test suits', () => {
    it('state should be changed', () => {
        const wrapper = shallow(<Login />);
        wrapper.find('#email').simulate('blur', {
            target: { name: 'email', value: 'sample@gmail.com' }
        })
        expect(wrapper.state('email')).toEqual('sample@gmail.com')
    })
});
describe('Password test suits', () => {
    it('state should be changed', () => {
        const wrapper = shallow(<Login />);
        wrapper.find('#password').simulate('blur', {
            target: { name: 'password', value: 'tested' }
        })
        expect(wrapper.state('password')).toEqual('tested')
    })
});