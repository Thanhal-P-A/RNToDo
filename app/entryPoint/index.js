import React from "react";
import { ActivityIndicator, View } from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import { persistor, store } from "../store";
import AppNavigator from "../navigation";

export default class EntryPoint extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate
          loading={
            <View style={{ flex: 1, justifyContent: "center" }}>
              <ActivityIndicator size="large" color="#0000ff" />
            </View>
          }
          persistor={persistor}
        >
          <AppNavigator />
        </PersistGate>
      </Provider>
    );
  }
}
