import React, { Component } from "react";
import { TouchableOpacity, View, Text, ActivityIndicator } from "react-native";
import { Colors } from "../../config/appConstants";
import Image from "./image";
import c from "../../styles/commonStyle";
class ImageButton extends Component {
  render() {
    const {
      imgStyle,
      containerStyle,
      onPress,
      resizeMode,
      left,
      right,
      isLoading,
      visible,
      disabled,
      hitSlop = {},
      light,
      progress,
      showProgress,
      TouchTypeComponent = TouchableOpacity,
      ...props
    } = this.props;
    return (
      <View style={{ marginRight: right, marginLeft: left }}>
        <TouchTypeComponent
          {...props}
          disabled={disabled}
          delayPressIn={0}
          delayPressOut={0}
          onPress={() => onPress()}
          style={[c.center, containerStyle]}
          hitSlop={hitSlop}
        >
          {visible ? (
            <ActivityIndicator
              size="small"
              style={imgStyle}
              color={light ? Colors.white : Colors.black}
            />
          ) : (
            <>
              {showProgress ? (
                <Text style={[c.text8Open600, { color: Colors.white }]}>
                  {progress}%
                </Text>
              ) : (
                <Image
                  isLoading={isLoading}
                  resizeMode={resizeMode ? resizeMode : "contain"}
                  {...props}
                  style={imgStyle}
                />
              )}
            </>
          )}
        </TouchTypeComponent>
      </View>
    );
  }
}

export default ImageButton;
