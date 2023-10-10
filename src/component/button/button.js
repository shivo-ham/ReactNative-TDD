import React, { PureComponent } from "react";
import { StyleSheet, TouchableOpacity, ActivityIndicator } from "react-native";
import PropTypes from "prop-types";
import { Text } from "../../component";
import { Colors, Dimens, Screen } from "../../config/appConstants";
const pageStyle = StyleSheet.create({
  containerStyle: {
    alignItems: "center",
    backgroundColor: Colors.black,
    borderRadius: 5,
    elevation: 2,
    padding: Screen.hp("2%"),
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.2,
    shadowRadius: 2.0
  },
  textBtn: {
    color: Colors.white,
    fontSize: Dimens.F12,
    letterSpacing: 2
  }
});

class Button extends PureComponent {
  render() {
    const {
      onPress,
      text,
      containerStyle,
      visible,
      color,
      loading,
      id,
      textStyle
    } = this.props;
    return (
      <TouchableOpacity
        style={[pageStyle.containerStyle, containerStyle]}
        activeOpacity={visible ? 1 : 0.6}
        onPress={
          visible
            ? null
            : () => {
                onPress(id);
              }
        }
      >
        {visible ? (
          <ActivityIndicator size="small" color={Colors.white} />
        ) : (
          <Text
            isLoading={loading}
            lable={!loading && text}
            textStyle={[
              pageStyle.textBtn,
              textStyle,
              { color: color ? color : Colors.white }
            ]}
          />
        )}
      </TouchableOpacity>
    );
  }
}

Button.propTypes = {
  containerStyle: PropTypes.any,
  onPress: PropTypes.func,
  String: PropTypes.any,
  visible: PropTypes.bool,
  text: PropTypes.any
};

Button.defaultProps = {
  containerStyle: pageStyle.containerStyle
};

export default Button;
