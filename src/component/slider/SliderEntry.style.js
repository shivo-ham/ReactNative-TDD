/* eslint-disable react-native/no-color-literals */
import { StyleSheet, Dimensions, Platform } from "react-native";
import { Colors, Dimens, Fonts } from "../../config/appConstants";
import { colors } from "./index.style";

const IS_IOS = Platform.OS === "ios";
const { width: viewportWidth, height: viewportHeight } =
  Dimensions.get("window");

function wp(percentage) {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
}

const slideHeight = viewportHeight * 0.4;
const slideWidth = wp(75);
const itemHorizontalMargin = wp(2);

export const sliderWidth = viewportWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;

const entryBorderRadius = 20;

export default StyleSheet.create({
  country: {
    alignSelf: "flex-start",
    backgroundColor: Colors.white,
    borderRadius: 50,
    color: Colors.orange,
    paddingHorizontal: 18,
    paddingVertical: 2
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: entryBorderRadius,
    height: slideHeight,
    resizeMode: "cover",
    width: itemWidth - 15
  },
  imageContainer: {
    flex: 1,
    marginBottom: IS_IOS ? 0 : -1 // Prevent a random Android rendering issue
  },
  imageContainerEven: {
    backgroundColor: colors.black
  },
  innerView: {
    alignSelf: "center",
    backgroundColor: "rgba(255,255,255,0.8)",
    borderRadius: 20,
    bottom: 5,
    margin: 10,
    padding: 10,
    position: "absolute",
    width: "90%"
  },
  place: {
    color: Colors.black,
    fontSize: Dimens.F24
  },
  price: {
    color: Colors.black
  },
  radiusMaskEven: {
    backgroundColor: colors.black
  },
  shadow: {
    borderRadius: entryBorderRadius,
    bottom: 18,
    left: itemHorizontalMargin,
    position: "absolute",
    right: itemHorizontalMargin,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    top: 0
  },
  slideInnerContainer: {
    alignSelf: "center",
    height: slideHeight,
    paddingHorizontal: itemHorizontalMargin,
    width: itemWidth
  },
  subtitle: {
    color: Colors.white,

    fontSize: 12,
    fontStyle: "italic",
    marginTop: 6
  },
  subtitleEven: {
    color: "rgba(255, 255, 255, 0.7)"
  },

  textContainer: {
    color: Colors.white,
    fontFamily: Fonts.bold,
    fontSize: Dimens.F14,
    justifyContent: "center",
    left: 10,
    paddingBottom: 20,
    paddingHorizontal: 12,
    position: "absolute",
    top: 20
  },
  textContainerEven: {
    backgroundColor: colors.black
  },
  title: {
    color: Colors.white,
    fontSize: 13,
    fontWeight: "bold",
    letterSpacing: 0.5
  },
  titleEven: {
    color: Colors.white
  }
});
