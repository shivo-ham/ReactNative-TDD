import React, { useState } from "react";
import { ScrollView, TouchableOpacity, View, StyleSheet } from "react-native";
import { AppRoot, ImageBackground, Image, Button, Text } from "../../component";
import {
  Colors,
  Dimens,
  ImageView,
  Screen,
  sliderImageList
} from "../../config/appConstants";
import commonStyle from "../../styles/commonStyle";
import c from "../../styles/commonStyle";

const s = StyleSheet.create({
  bgImg: {
    borderRadius: 20
  },
  bgImgContainer: {
    alignSelf: "center",
    height: Screen.height * 0.48,
    paddingHorizontal: 20,
    paddingTop: 20,
    width: "100%"
  },
  btn: {
    backgroundColor: Colors.red,
    borderRadius: 30,
    bottom: 20,
    marginHorizontal: Screen.hp(6)
  },
  country: {
    alignSelf: "flex-start",
    backgroundColor: Colors.searchbarBg,
    borderRadius: 50,
    color: Colors.red,
    fontWeight: "bold",
    marginTop: 30,
    paddingHorizontal: 20,
    paddingVertical: 5
  },
  description: {
    color: Colors.tabGray,
    fontSize: Dimens.F18,
    marginTop: 16
  },
  innerStyle: {
    padding: 20
  },
  place: {
    color: Colors.black,
    fontSize: Dimens.F40,
    fontWeight: "bold",
    marginVertical: 12
  },
  price: {
    color: Colors.black,
    fontSize: Dimens.F30,
    fontWeight: "bold"
  },
  scrollEnd: {
    alignItems: "flex-end",
    justifyContent: "flex-end"
  },
  scrollStart: {
    alignSelf: "flex-start",
    height: Screen.height * 0.12,
    width: "95%"
  },
  thumbnails: {
    alignItems: "center",
    borderColor: Colors.white,
    borderRadius: 16,
    justifyContent: "center",
    marginRight: 10,
    overflow: "hidden"
  }
});
const Home = ({ navigation }) => {
  const [activeImage, setActiveImage] = useState(0);

  const imageText = (image, text) => {
    return (
      <View style={commonStyle.flexRow}>
        <Image
          source={image}
          style={commonStyle.img20}
          tintColor={Colors.red}
        />
        <Text textStyle={s.txt} lable={text} />
      </View>
    );
  };

  return (
    <AppRoot hidden={true}>
      <ScrollView style={c.flex1}>
        <ImageBackground
          imageStyle={s.bgImg}
          resizeMode="stretch"
          style={s.bgImgContainer}
          source={sliderImageList.images[activeImage].img}
        >
          <View style={commonStyle.left20}>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              contentContainerStyle={s.scrollEnd}
              style={s.scrollStart}
            >
              {sliderImageList.images.map((item, i) => {
                return (
                  <React.Fragment key={item.id}>
                    <TouchableOpacity
                      activeOpacity={0.8}
                      // eslint-disable-next-line react-native/no-inline-styles
                      style={{
                        ...s.thumbnails,
                        borderWidth: activeImage == i ? 5 : 3,
                        marginLeft: i === 0 ? 0 : 2
                      }}
                      onPress={() => setActiveImage(i)}
                    >
                      <Image
                        resizeMode="cover"
                        source={item.img}
                        style={{
                          height:
                            Screen.height * 0.09 + (activeImage == i ? 0 : 2),
                          width:
                            Screen.height * 0.09 + (activeImage == i ? 0 : 2)
                        }}
                      />
                    </TouchableOpacity>
                  </React.Fragment>
                );
              })}
            </ScrollView>
          </View>
        </ImageBackground>

        <View style={s.innerStyle}>
          <View style={commonStyle.flexRowBetween}>
            <View>
              <Text textStyle={s.country} lable={sliderImageList.country} />
              <Text textStyle={s.place} lable={sliderImageList.place} />
            </View>
            <Text textStyle={s.price} lable={sliderImageList.price} />
          </View>

          <View style={commonStyle.flexRow}>
            {imageText(ImageView.star, sliderImageList.rating)}
            {imageText(ImageView.clock, sliderImageList.time)}
            {imageText(ImageView.location, sliderImageList.length)}
          </View>

          <Text textStyle={s.description} lable={sliderImageList.description} />
        </View>
        <View style={commonStyle.height50} />
      </ScrollView>
      <Button
        text="Book Now"
        containerStyle={s.btn}
        onPress={() => navigation.goBack()}
      />
    </AppRoot>
  );
};

export default Home;
