import { StyleSheet, Dimensions } from "react-native";

var { height } = Dimensions.get("window");

const styles = StyleSheet.create({
  containerSelected: {
    flex: 1,
    elevation: 1,
    backgroundColor: "#4642F1",
    margin: 5,
    borderWidth: 1,
    borderColor: "#e8e5e5",
    padding: 5,
    paddingLeft: 10,
    paddingBottom: 10,
    justifyContent: "space-around"
  },
  container: {
    flex: 1,
    elevation: 1,
    backgroundColor: "white",
    margin: 5,
    borderWidth: 1,
    borderColor: "#e8e5e5",
    padding: 5,
    paddingLeft: 10,
    paddingBottom: 10,
    justifyContent: "space-around"
  },
  iconContainer: {
    alignSelf: "flex-end"
  },
  textSelectedTitle: {
    fontSize: height * 0.02,
    color: "white",
    fontWeight: "bold"
  },
  textTitle: {
    fontSize: height * 0.02,
    color: "black",
    fontWeight: "bold"
  },
  textSelectedTaskNo: {
    fontSize: height * 0.016,
    paddingTop: 2,
    color: "white"
  },
  textTaskNo: {
    fontSize: height * 0.016,
    paddingTop: 2,
    color: "#bab2b2"
  }
});

export default styles;
