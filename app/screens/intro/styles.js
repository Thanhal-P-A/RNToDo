import { StyleSheet, Dimensions } from "react-native";
var { height, width } = Dimensions.get("window");
import { getStatusBarHeight } from "react-native-status-bar-height";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: getStatusBarHeight(true)
  },
  view1: {},
  view2: {},
  view3: {},
  image: {
    height: height - 50,
    width: width,
    alignSelf: "center",
    opacity: 0.6,
    resizeMode: "stretch",
    marginTop: getStatusBarHeight(true)
  },
  doneButton: {
    position: "absolute",
    top: height * 0.88,
    height: height * 0.1,
    width: width * 0.18,
    backgroundColor: "grey",
    borderTopStartRadius: width * 0.2,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-end",
    elevation: 2
  },
  textDone: {
    paddingLeft: width * 0.02,
    fontSize: width * 0.04,
    fontWeight: "bold",
    color: "white"
  }
});

export default styles;
