import { StyleSheet } from "react-native";
import { Colors, Dimens, Screen } from "../config/appConstants";
const commonStyle = StyleSheet.create({
  box40: {
    alignItems: "center",
    backgroundColor: Colors.black,
    borderRadius: 16,
    height: 50,
    justifyContent: "center",
    width: 50
  },
  center: {
    alignItems: "center",
    justifyContent: "center"
  },
  flex1: {
    flex: 1
  },
  flexColumn: {
    alignItems: "center",
    flexDirection: "column"
  },
  flexRow: {
    alignItems: "center",
    flexDirection: "row"
  },
  flexRowBetween: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  height50: {
    height: 50
  },
  img10: {
    height: 10,
    tintColor: Colors.green,
    width: 10
  },
  img18: {
    height: 18,
    width: 18
  },
  img20: {
    height: 20,
    tintColor: Colors.white,
    width: 20
  },
  img30: {
    height: 30,
    width: 30
  },
  img50: {
    height: 50,
    width: 50
  },

  img64Style: {
    height: Screen.height * 0.09,
    width: Screen.height * 0.09
  },
  left20: { left: 20 },
  separator: {
    backgroundColor: Colors.cardLight,
    height: 1,
    opacity: 0.5,
    width: "100%"
  },
  text40: {
    color: Colors.black,
    fontSize: Dimens.F30,
    fontWeight: "bold",
    paddingHorizontal: 20,
    paddingVertical: Screen.hp(5)
  }
});
export default commonStyle;
