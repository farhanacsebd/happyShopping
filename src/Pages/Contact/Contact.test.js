import React from 'react';
import { shallow } from 'enzyme';
import { Contact } from './Contact'


it('should render customer service phone number', () => {
    const wrapper = shallow(<Contact />);
    const span = wrapper.find("span");
    const result = span.text();

    expect(result).toBe('Any time');

})