import { StyleSheet, Dimensions, Platform } from "react-native";

var { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f7f7"
  },
  viewDateSelector: {
    height: height * 0.2,
    justifyContent: "space-around"
  },
  viewDatePicker: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  textMonth: {
    alignSelf: "flex-end",
    fontSize: height * 0.03,
    color: "black",
    paddingHorizontal: 10,
    paddingVertical: height * 0.01
  },
  textYear: {
    fontSize: height * 0.03,
    paddingHorizontal: 10,
    paddingVertical: height * 0.01
  },
  textSetDate: {
    paddingLeft: 10,
    color: "black",
    fontSize: height * 0.024,
    fontWeight: "bold"
  },
  dateView: {
    padding: 10,
    borderRadius: 7,
    alignItems: "center"
  },
  textDate: {
    fontSize: height * 0.022,
    fontWeight: "bold",
    color: "grey"
  },
  viewGroupSelector: {
    height: height * 0.2,
    paddingHorizontal: 10
  },
  viewSetReminder: {
    flexDirection: "row",
    height: height * 0.07,
    justifyContent: "space-between",
    elevation: 1,
    alignItems: "center",
    marginTop: height * 0.05,
    backgroundColor: "white",
    paddingRight: 10
  },
  textSetReminder: {
    paddingHorizontal: 10,
    fontSize: height * 0.02
  },
  textSetTime: {
    fontSize: height * 0.02,
    fontWeight: "bold",
    color: "black",
    padding: height * 0.015
  },
  viewTimeSelector: {
    height: height * 0.055,
    flexDirection: "row",
    elevation: 1,
    backgroundColor: "white",
    borderWidth: 0.4,
    borderColor: "#cecece"
  },
  flatList: {
    paddingHorizontal: (width * 1) / 42
  },
  viewTime: {
    height: height * 0.055,
    width: width * (1 / 14),
    justifyContent: "center"
  },
  textTime: {
    alignSelf: "center",
    fontSize: height * 0.015,
    fontWeight: "bold",
    color: "#bfbfbf"
  },
  textTimeSelected: {
    alignSelf: "center",
    fontSize: height * 0.015,
    color: "#4642F1",
    fontWeight: "bold"
  },
  viewType: {
    width: width * (2 / 21),
    backgroundColor: "#4642F1",
    justifyContent: "center"
  },
  textType: {
    alignSelf: "center",
    fontSize: height * 0.015,
    color: "#bfbfbf"
  },
  textTypeSelected: {
    alignSelf: "center",
    fontSize: height * 0.015,
    color: "white"
  },
  viewTextInput: {
    height: height * 0.12,
    margin: height * 0.015,
    marginBottom: height * 0.05,
    borderWidth: 0.5,
    borderColor: "#ABABAB"
  },
  bumpedcontainer: {
    marginBottom: Platform.OS === "ios" ? 230 : 5
  },
  textInputTodo: {
    flex: 1,
    color: "black",
    paddingLeft: 10,
    fontSize: 16,
    paddingRight: 20
  },
  doneButton: {
    height: height * 0.07,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0091F8"
  },
  textDoneButton: {
    fontSize: height * 0.024,
    fontWeight: "bold",
    color: "white"
  }
});

export default styles;
