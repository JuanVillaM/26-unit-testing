import React from 'react';
import { shallow } from 'enzyme';
import FirstApp from "../FirstApp";

describe('Tests in <FirstApp />', () => {
    test('Must show <FirsyApp /> correctly', () => {
        const greet = 'Hello, I am Goku';
        const wrapper = shallow( <FirstApp greet={ greet } /> );

        expect( wrapper ).toMatchSnapshot();
    })

    test('Must show the subtitle sended by props', () => {
        const greet = 'Hello, I am Goku';
        const subtitle = 'I am a Super Subtitle';
        const wrapper = shallow( <FirstApp greet={ greet } subtitle={ subtitle } /> );
        const paragraphText = wrapper.find('p').text();
        
        expect( paragraphText ).toBe( subtitle );
    })
    
    
});