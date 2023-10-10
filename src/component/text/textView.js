import React, { Component } from "react";
import { Text } from "react-native";
class TextView extends Component {
  render() {
    const { lable, textStyle, LabelComponent = null, ...props } = this.props;
    return (
      <>
        {LabelComponent ? (
          <LabelComponent />
        ) : (
          <Text {...props} style={textStyle}>
            {lable}
          </Text>
        )}
      </>
    );
  }
}
export default TextView;
