/**
 * @formatc
 */
import React from "react";
import App from "./src/navigation";
import { Provider } from "react-redux";
import { SafeAreaProvider } from "react-native-safe-area-context";
import configureStore from "./src/redux/configureStore";
import "./src/utils/ignoreWarnings";
function ReduxApp() {
  const Store = configureStore();
  return (
    <Provider store={Store}>
      <SafeAreaProvider>
        <App />
      </SafeAreaProvider>
    </Provider>
  );
}
export default React.memo(ReduxApp);
