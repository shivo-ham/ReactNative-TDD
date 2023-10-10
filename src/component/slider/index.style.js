/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from "react-native";
import { Colors } from "../../config/appConstants";

export const colors = {
  black: "#1a1917",
  gray: "#888888",
  background1: "#B721FF",
  background2: "#21D4FD"
};

export default StyleSheet.create({
  container: {
    backgroundColor: colors.background1,
    flex: 1
  },
  exampleContainer: {
    paddingVertical: 30
  },
  exampleContainerDark: {
    backgroundColor: colors.black
  },
  exampleContainerLight: {
    backgroundColor: Colors.white
  },
  gradient: {
    ...StyleSheet.absoluteFillObject
  },
  paginationContainer: {
    backgroundColor: Colors.white,
    borderRadius: 4,
    bottom: 130,
    paddingHorizontal: 0,
    paddingVertical: 0,
    width: 94
  },
  paginationDot: {
    backgroundColor: Colors.white,
    borderRadius: 4,
    height: 5,
    width: 22
  },
  safeArea: {
    backgroundColor: colors.black,
    flex: 1
  },
  scrollview: {
    flex: 1
  },
  slider: {
    marginTop: 20,
    overflow: "visible" // for custom animations
  },
  sliderContentContainer: {
    marginTop: 16,
    paddingVertical: 4 // for custom animation
  },
  subtitle: {
    backgroundColor: "transparent",
    color: "rgba(255, 255, 255, 0.75)",
    fontSize: 13,
    fontStyle: "italic",
    marginTop: 5,
    paddingHorizontal: 30,
    textAlign: "center"
  },
  title: {
    backgroundColor: "transparent",
    color: "rgba(255, 255, 255, 0.9)",
    fontSize: 20,
    fontWeight: "bold",
    paddingHorizontal: 30,
    textAlign: "center"
  },
  titleDark: {
    color: colors.black
  }
});
