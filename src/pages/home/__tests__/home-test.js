/**
 * @format
 */

import React from 'react';
import 'react-native';
import { View } from 'react-native';
import renderer from 'react-test-renderer';
import Home from '../';
const Carousel = props => <View {...props} testID={'carousel'} />;
jest.mock('../../../component/snap-carousel', () => {
  return props => <Carousel {...props} />;
});
describe('Home', () => {
  const fakeNavigation = {
    navigate: jest.fn(),
    goBack: jest.fn(),
  };

  it('should render correctly', () => {
    //Check render view
    const rendered = renderer.create(<Home navigation={fakeNavigation} />).toJSON();
    expect(rendered).toMatchSnapshot();
  });
});
