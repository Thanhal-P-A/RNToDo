import { StyleSheet, Dimensions } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";

var { height, width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#f7f7f7",
    height: 70,
    elevation: 3,
    padding: 20,
    paddingBottom: 5,
    paddingTop: 10,
    marginTop: getStatusBarHeight(true)
  },
  viewMain: { justifyContent: "space-around" },
  textTitle: {
    color: "black",
    fontSize: height * 0.04,
    fontWeight: "bold"
  },
  textTaskNo: { color: "black", fontSize: 16 }
});
