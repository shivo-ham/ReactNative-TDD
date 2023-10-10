/* eslint-disable react-native/no-inline-styles */
import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Colors, Fonts } from "../config/appConstants";
import ImageBackground from "../component/image/imageBackground";
import { Text } from "../component";

const s = StyleSheet.create({
  background: {
    height: 160,
    margin: 16
  },
  img: {
    borderRadius: 10
  },
  innerBg: {
    backgroundColor: Colors.alertbackgrouend,
    borderRadius: 10,
    margin: 16,
    padding: 16
  },
  module: {
    color: Colors.white,
    fontFamily: Fonts.OpenBold,
    fontSize: 18
  },
  moduleHeading: {
    color: Colors.white,
    fontFamily: Fonts.OpenRegular
  }
});
const UserList = ({ data, index, onPress, loading }) => {
  let categories = [];
  if (data && data.categories) {
    data.categories.forEach(({ name }) => {
      categories.push(name);
    });
  }
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={loading ? null : onPress}>
      <ImageBackground
        resizeMode="contain"
        style={{ ...s.background, marginTop: index == 0 ? 16 : 0 }}
        imageStyle={s.img}
        isLoading={loading}
        thumbnailSource={{ uri: !loading ? data.profile : undefined }}
        source={{ uri: !loading ? data.profile : undefined }}
      >
        {!loading && (
          <View style={s.innerBg}>
            <Text lable={!loading && data.name} textStyle={s.module} />
            <Text
              lable={!loading && categories.toString()}
              textStyle={s.moduleHeading}
            />
          </View>
        )}
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default UserList;
