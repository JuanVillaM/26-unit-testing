import React from 'react';
import { shallow } from 'enzyme';
import CounterApp from "../CounterApp";

describe('Tests in <CounterApp />', () => {

    let wrapper = shallow( <CounterApp /> );

    beforeEach( () => {
        wrapper = shallow( <CounterApp /> );
    })

    test('Must show <CounterApp /> correctly', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('Must show the default value of 100', () => {
        const wrapper = shallow( <CounterApp value={ 100 } /> );
        const counterText = wrapper.find('p').text();
        
        expect( counterText ).toBe( '100' );
    });
    
    test('Must increment the counter', () => {
        wrapper.find('button').at(0).simulate('click');
        const counterText = wrapper.find('p').text();
        
        expect( counterText ).toBe( '11' );
    });

    test('Must reset the counter', () => {
        const wrapper = shallow( <CounterApp value={ 105 } /> );
        
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');

        const counterText = wrapper.find('p').text();

        expect( counterText ).toBe( '105' );
    });

    test('Must decrement the counter', () => {
        wrapper.find('button').at(2).simulate('click');
        const counterText = wrapper.find('p').text();
        
        expect( counterText ).toBe( '9' );
    });
    
});