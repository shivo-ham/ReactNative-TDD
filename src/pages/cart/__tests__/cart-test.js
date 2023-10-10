/**
 * @format
 */

import React from 'react';
import 'react-native';
import renderer from 'react-test-renderer';
import Cart from '../';

describe('Cart', () => {
  const fakeNavigation = {
    navigate: jest.fn(),
    goBack: jest.fn(),
  };

  it('should render correctly', () => {
    //Check render view
    const rendered = renderer.create(<Cart navigation={fakeNavigation} />).toJSON();
    expect(rendered).toMatchSnapshot();
  });
});
