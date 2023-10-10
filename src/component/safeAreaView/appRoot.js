import React, { memo } from "react";
import AppSafeAreaView from "./appSafeAreaView";
const AppRoot = ({ children, theme, needsSafeArea, safeAreaTheme, hidden }) => {
  return (
    <AppSafeAreaView
      theme={theme}
      hidden={hidden}
      needsSafeArea={needsSafeArea}
      safeAreaTheme={safeAreaTheme}
    >
      {children}
    </AppSafeAreaView>
  );
};
export default memo(AppRoot);
