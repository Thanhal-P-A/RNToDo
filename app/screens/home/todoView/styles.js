import { StyleSheet, Dimensions } from "react-native";
var { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  viewSwipeComponent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column"
  },
  iconContainer: {},
  viewTodoContainer: {
    flexDirection: "row",
    flex: 1,
    padding: 5,
    backgroundColor: "white",
    marginTop: 5,
    elevation: 2,
    justifyContent: "space-between",
  },
  iconTodoGroup: {
    flexDirection: "row",
    flex: 1,
    padding: 5,
    backgroundColor: "white",
    marginTop: 5,
    justifyContent: "space-between"
  },
  viewTodo: { flex: 6 },
  viewTodoCheck: {
    flexDirection: "row"
  },
  textTodo: {
    fontSize: width * 0.042,
    color: "black",
    padding: 5,
    alignSelf: "flex-start"
  },
  iconChecked: {
    alignSelf: "flex-start",
    paddingTop: 12,
    paddingLeft: 5
  },
  textGroup: {
    fontSize: width * 0.032,
    padding: 5,
    paddingTop: 0
  },
  viewTime: {
    flex: 2
  },
  textTime: {
    fontSize: width * 0.03,
    color: "grey",
    alignSelf: "flex-end",
    paddingTop: 5
  },
  viewNoTask:{
    height:height*.35,
    alignItems:'center',
    justifyContent:"center"
  },
  imageNoTask:{
    height:height*.2,
    width:width*.4,
    opacity:.5
  },
  textNoTask:{
    fontSize:width*.05,
    color:'grey',
    opacity:.3
  }
});
export default styles;
