import { Dimensions } from "react-native";
const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;
import { RFPercentage } from "react-native-responsive-fontsize";
import {
  widthPercentageToDP,
  heightPercentageToDP,
  listenOrientationChange,
  removeOrientationListener
} from "react-native-responsive-screen";

const Constants = {
  animation_from_right: "slide_from_right",
  animation_from_left: "slide_from_left",
  animation_from_bottom: "slide_from_bottom",
  animation_default: "default",
  animation_none: "none",
  animation_fade: "fade",
  animation_flip: "flip"
};

const Colors = {
  green: "#39b18d",
  pink: "#ff4081",
  white: "#FFFFFF",
  black: "#000",
  red: "#ff450d",
  orange: "#d56f51",
  errorColor: "#B52222",
  yellow: "rgba(239, 192, 48, 0.8)",
  btnColor: "#EFC030",
  gray: "gray",
  tabGray: "#999999",
  shadowColor: "#F3F6F6",
  cardLight: "rgba(0, 0, 0, 0.2)",
  alertbackgrouend: "rgba(0, 0, 0, 0.5)",
  searchbarBg: "#F1F2F4"
};

const Dimens = {
  F7: RFPercentage(0.8),
  F9: RFPercentage(1.1),
  F10: RFPercentage(1.2),
  F12: RFPercentage(1.4),
  F13: RFPercentage(1.55),
  F14: RFPercentage(1.7),
  F16: RFPercentage(1.9),
  F18: RFPercentage(2.2),
  F20: RFPercentage(2.4),
  F22: RFPercentage(2.6),
  F24: RFPercentage(2.9),
  F26: RFPercentage(3.1),
  F28: RFPercentage(3.4),
  F30: RFPercentage(3.6),
  F40: RFPercentage(4.8)
};

const Screen = {
  height: SCREEN_HEIGHT,
  width: SCREEN_WIDTH,
  wp: widthPercentageToDP,
  hp: heightPercentageToDP,
  scale: Dimensions.get("window").scale,
  fontScale: Dimensions.get("window").fontScale,
  OrientationChange: listenOrientationChange,
  OrientationListener: removeOrientationListener
};

const Fonts = {};

const ImageView = {
  close: require("../assets/close.png"),
  check: require("../assets/check.png"),
  filter: require("../assets/filter.png"),
  search: require("../assets/search.png"),
  menu: require("../assets/menu.png"),

  star: require("../assets/star.png"),
  location: require("../assets/location.png"),
  bookmark: require("../assets/bookmark.png"),
  next: require("../assets/next.png"),
  back: require("../assets/back.png"),
  cart: require("../assets/cart.png"),
  clock: require("../assets/clock.png"),

  tab1: require("../assets/tab1.png"),
  tab2: require("../assets/tab2.png"),
  tab3: require("../assets/tab3.png"),
  tab4: require("../assets/tab4.png"),

  img1: require("../assets/img1.jpg"),
  img2: require("../assets/img2.jpg"),
  img3: require("../assets/img3.jpeg"),
  img4: require("../assets/img4.png"),

  blur: require("../assets/blur.png"),
  user: require("../assets/user.png")
};

const Strings = {
  app_Name: "TOURX",
  loading: "Loading...",
  home: "HOME",
  apply: "Apply",
  searchp: "Search Places",
  discover: "Discover \nA New World"
};

const emptyArray = [{ id: "1" }, { id: "2" }, { id: "3" }, { id: "4" }];

const slider = [
  {
    country: "Turky",
    place: "Cappadocia",
    price: "$50.00",
    title: "Find out how you spend your money and get better control",
    image: ImageView.img1
  },
  {
    country: "Turky",
    place: "Cappadocia",
    price: "$50.00",
    title: "Bring your friends to Zype and win lifetime rewards. Here’s how...",
    image: ImageView.img2
  },
  {
    country: "Turky",
    place: "Cappadocia",
    price: "$50.00",
    title: "Find out how you spend your money and get better control",
    image: ImageView.img3
  },
  {
    country: "Turky",
    place: "Cappadocia",
    price: "$50.00",
    title: "Find out how you spend your money and get better control",
    image: ImageView.img4
  }
];

const sliderImageList = {
  country: "Turkey",
  place: "Cappadocia",
  rating: "5.0",
  time: "30 mins",
  length: "20 km",
  price: "$50.00",
  description: `Cappadocia, a semi-arid region in central Turkey, is known for its distinctive “fairy chimneys,” tall, cone-shaped rock formations clustered in Monks Valley, Göreme and elsewhere. Other notables sites include Bronze Age homes carved into valley walls by troglodytes (cave dwellers) and later used as refuges by early Christians.`,
  images: [
    {
      id: 1,
      img: ImageView.img1
    },
    {
      id: 2,
      img: ImageView.img2
    },
    {
      id: 2,
      img: ImageView.img3
    },
    {
      id: 2,
      img: ImageView.img4
    }
  ]
};

export {
  Constants,
  Colors,
  Dimens,
  Screen,
  Fonts,
  ImageView,
  Strings,
  emptyArray,
  slider,
  sliderImageList
};
