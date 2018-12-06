import { StyleSheet,Dimensions } from "react-native";
var { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  viewSwipeComponent: {
    flex: 1,
    flexDirection:'row',
    alignItems: "center",
    justifyContent: "center",
  },
  swiperIconContainer: {  },
  container: {
    flexDirection: "row",
    flex: 1,
    padding: 10,
    backgroundColor: "white",
    margin: 5,
    elevation: 2,
    justifyContent: "space-between",
  },
  viewTodoCheck: {
    flex:6,
    flexDirection:'row'
  },
  textTodo: {
    fontSize: height*.025,
    color: "black"
  },
  iconChecked: {
    alignSelf: "flex-start",
    padding:8
  },
  viewTimeDate: { flex:3,paddingLeft:3},
  textTime: {
    fontSize: height*.02,
    color: "grey",
    alignSelf: "flex-end",
    paddingTop: 5
  },
  textDate: {
    fontSize: height*.02,
    color: "grey",
    alignSelf: "flex-end",
    paddingTop: 5
  }
});

export default styles;
