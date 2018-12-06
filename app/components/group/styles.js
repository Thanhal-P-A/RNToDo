import { StyleSheet, Dimensions } from "react-native";

var { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    height: height * 0.25,
    padding: 5,
    paddingBottom: 20,
    backgroundColor: "#f7f7f7"
  },
  viewPart: {
    flex: 1,
    flexDirection: "row"
  }
});

export default styles;
