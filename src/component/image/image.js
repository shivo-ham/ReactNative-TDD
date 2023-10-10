import React, { Component } from "react";
import { View, StyleSheet, Image } from "react-native";
class ImageUI extends Component {
  render() {
    const { style = {}, tintColor, ...props } = this.props;

    return (
      <View style={style} ref={this._captureRef}>
        <Image
          {...props}
          style={[
            StyleSheet.absoluteFill,
            {
              width: style.width,
              height: style.height,
              tintColor: tintColor
            }
          ]}
        />
      </View>
    );
  }
}

export default ImageUI;
