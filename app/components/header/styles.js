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
    paddingRight: 20,
    paddingLeft:10,
    paddingBottom: 5,
    paddingTop: 10,
    alignItems:'center',
    marginTop: getStatusBarHeight(true)
  },
  viewBack:{
    flexDirection:'row'
  },
  viewMain: { flexDirection:'row',alignItems:'center' },
  textTitle: {
    color: "black",
    fontSize: height * 0.03,
    fontWeight: "bold",paddingLeft:20
  },
  icon:{
    paddingLeft:20,
    paddingBottom:5,
    paddingRight:10
  },
  textTaskNo: { color: "grey", fontSize: 14 }
});
