/**
 * @format
 */

import React from 'react';
import 'react-native';
import renderer from 'react-test-renderer';
import Menu from '../';

describe('Menu', () => {
  const fakeNavigation = {
    navigate: jest.fn(),
    goBack: jest.fn(),
  };

  it('should render correctly', () => {
    //Check render view
    const rendered = renderer.create(<Menu navigation={fakeNavigation} />).toJSON();
    expect(rendered).toMatchSnapshot();
  });
});
