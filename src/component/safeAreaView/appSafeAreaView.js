import React, { memo } from "react";
import { SafeAreaView, StyleSheet, StatusBar, View } from "react-native";
import { Colors } from "../../config/appConstants";
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    flex: 1
  },
  safeAreaDark: {
    backgroundColor: Colors.black
  },
  safeAreaGray: {
    backgroundColor: Colors.shadowColor
  },
  safeAreaLight: {
    backgroundColor: Colors.white
  },
  safeAreaView0: {
    flex: 0
  },
  safeAreaView1: {
    backgroundColor: Colors.black,
    flex: 1
  }
});

const AppSafeAreaView = ({
  children,
  theme,
  hidden,
  needsSafeArea = true,
  safeAreaTheme = "light"
}) => {
  const _renderContent = () => {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle={theme == "light" ? "light-content" : "dark-content"}
          hidden={hidden ? hidden : false}
          backgroundColor={theme == "light" ? "transparent" : Colors.white}
        />
        {children}
      </View>
    );
  };
  if (needsSafeArea) {
    return (
      <>
        <SafeAreaView
          style={[
            styles.safeAreaView0,
            safeAreaTheme === "light"
              ? styles.safeAreaLight
              : safeAreaTheme === "gray"
              ? styles.safeAreaGray
              : styles.safeAreaDark
          ]}
        />
        <SafeAreaView style={styles.safeAreaView1}>
          {_renderContent()}
        </SafeAreaView>
      </>
    );
  }

  return <>{_renderContent()}</>;
};

export default memo(AppSafeAreaView);
