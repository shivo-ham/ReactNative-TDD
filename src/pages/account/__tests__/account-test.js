/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/**
 * @format
 */

import { act, waitFor } from "@testing-library/react-native";
import React from "react";
import "react-native";
import { FlatList, Text } from "react-native";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import Account from "../";
import configureStore from "../../../redux/configureStore";
jest.mock("@react-navigation/native", () => {
  return {
    useFocusEffect: (callback) => callback(),
    useIsFocused: () => true
  };
});

describe("Account", () => {
  const fakeNavigation = {
    navigate: jest.fn(),
    goBack: jest.fn()
  };

  const route = {
    params: {
      token: "token"
    }
  };
  const store = configureStore();
  it("should render correctly", () => {
    let rendered;
    act(() => {
      renderer
        .create(
          <Provider store={store}>
            <Account navigation={fakeNavigation} route={route} />
          </Provider>
        )
        .toJSON();
    });
    waitFor(() => {
      expect(rendered).toMatchSnapshot();
    });
  });

  jest.mock("@react-native-firebase/database", () => {
    const set = jest.fn();
    return {
      database: jest.fn(() => ({
        ref: jest.fn(() => ({
          once: jest.fn(() => ({
            then: jest.fn(() => ({
              set
            }))
          }))
        }))
      }))
    };
  });

  it("renders the FlatList component", () => {
    const tree = renderer
      .create(
        <FlatList
          data={["apple", "banana", "kiwi"]}
          keyExtractor={(item) => item}
          renderItem={({ item }) => <Text>{item}</Text>}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
