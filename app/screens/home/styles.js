import { StyleSheet, Dimensions } from "react-native";

var { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f7f7"
  },
  viewTop: {
    height: height * 0.25,
    backgroundColor: "#f7f7f7"
  },
  viewTodoList: {
    flex: 1,
    width: "100%"
  },
  flatList: {
    padding: 5,
    paddingBottom: 1
  },
  viewBottom: {
    height: height * 0.34,
    padding: 5,
    paddingBottom: 20,
    backgroundColor: "#f7f7f7"
  },
  textBottom: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    margin: 5,
    marginTop: 0
  },
  viewBottomPart: {
    flex: 1,
    flexDirection: "row"
  },
  viewAddCard: {
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
  iconContainerAdd:{
    flex: 1,
    alignSelf: "flex-end",
    paddingTop: 2
  },
  textAddmore: {
    fontSize: height * 0.02,
    color: "white",
    fontWeight: "bold"
  },
  textTodoAddCard: {
    fontSize: height * 0.016,
    color: "white"
  }
});

export default styles;
