import { StyleSheet, Dimensions } from "react-native";
var { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  viewSwipeComponent: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  swiperIconContainer: {},
  container: {
    flexDirection: "row",
    flex: 1,
    margin: 5,
    justifyContent: "space-between"
  },
  viewTodoCheck: {
    borderRadius: 2,
    borderLeftWidth: 3,
    padding: 10,
    flex: 7,
    elevation: 1,
    backgroundColor: "white"
  },
  textTodo: {
    fontSize: height * 0.02,
    color: "black"
  },
  viewTimeDate: {
    flex: 2,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 10
  },
  textTime: {
    fontSize: height * 0.015
  },
  textDate: {
    fontSize: height * 0.015,
    color: "grey",
    fontWeight: "bold",
    paddingTop: 5
  },
  viewNoTask: {
    height: height * 0.8,
    alignItems: "center",
    justifyContent: "center"
  },
  imageNoTask: {
    height: height * 0.2,
    width: width * 0.4,
    opacity: 0.5
  },
  textNoTask: {
    fontSize: width * 0.05,
    color: "grey",
    opacity: 0.4
  }
});

export default styles;
