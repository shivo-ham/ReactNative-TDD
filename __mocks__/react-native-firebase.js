/* eslint-disable no-undef */
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
