import React from "react";
import { View, StyleSheet, Platform } from "react-native";
import c from "../../styles/commonStyle";
import { Colors, Dimens, ImageView } from "../../config/appConstants";
import { Text } from "../../component";
import ImageButton from "../image/imageButton";
const s = StyleSheet.create({
  btntuch: {
    height: 25,
    width: 25
  },
  lable: {
    color: Colors.orange,
    fontSize: Dimens.F18,
    fontWeight: "bold"
  },
  root: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    ...Platform.select({
      android: {
        marginTop: 20
      }
    })
  }
});
const TopTabBar = ({ openDrawer, openAccount, lable, loading }) => {
  return (
    <View style={s.root}>
      {openDrawer && (
        <ImageButton
          isLoading={false}
          source={ImageView.menu}
          imgStyle={c.img30}
          containerStyle={[s.btntuch]}
          onPress={() => {
            openDrawer();
          }}
          hitSlop={{ top: 5, left: 5, bottom: 5, right: 5 }}
        />
      )}
      <Text lable={!loading && lable} textStyle={[c.s1, s.lable]} />
      {openAccount && (
        <ImageButton
          isLoading={false}
          source={ImageView.user}
          imgStyle={c.img50}
          containerStyle={[s.btntuch]}
          onPress={() => {
            openDrawer();
          }}
          hitSlop={{ top: 5, left: 5, bottom: 5, right: 5 }}
        />
      )}
    </View>
  );
};

export default TopTabBar;
