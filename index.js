import { AppRegistry } from "react-native";
import { name as appName } from "./app.json";
import EntryPoint from "./app/entryPoint";

AppRegistry.registerComponent(appName, () => EntryPoint);
