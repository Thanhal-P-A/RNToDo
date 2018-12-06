import { StyleSheet, Dimensions } from "react-native";
import { getStatusBarHeight } from 'react-native-status-bar-height';

var { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  containerA: {
    flex: 1,
    paddingTop: getStatusBarHeight(true)
  },
  container: {
    flex: 1,
    paddingTop: getStatusBarHeight(true),
  },
  calendarInnerStyleA: {
    flex: 1
  },
  calendarInnerStyle: {
    flex: 1
  },
  calendarStyleA: {
    flex: 1,
    elevation: 2
  },
  calendarStyle: {
    flex: 1,
    paddingTop: 20,
    paddingBottom: 10,
    elevation: 2
  },
  calendarHeaderStyleA: {
    fontSize: height * 0.03,
    alignSelf: "center",
    color: "black",
    paddingTop: 10
  },
  calendarHeaderStyle: {
    fontSize: height * 0.04,
    color: "black",
    alignSelf: "flex-start",
    paddingLeft: 10,
    
  },
  dateNameStyleA: {
    color: "black"
  },
  dateNameStyleC: { color: "#4642F1" },
  dateNumberStyleA: {
    color: "black"
  },
  dateNumberStyleC: { color: "#6D6CF4" },
  highlightDateNameStyleA: {
    color: "black"
  },
  highlightDateNameStyle: {
    color: "white",
    height: "70%",
    width: "160%",
    paddingTop: 3,
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    elevation: 2,
    backgroundColor: "#6D6CF4"
  },
  highlightDateNumberStyleA: {
    color: "white",
    height: 28,
    width: 28,
    borderRadius:14,
    backgroundColor: "#4642F1",
    alignSelf:'center',
    alignItems: 'center',
    justifyContent:'center',
    elevation:2,
    overflow: 'hidden'
  },
  highlightDateNumberStyle: {
    color: "white",
    height: "100%",
    width: "160%",
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2,
    elevation: 2,
    backgroundColor: "#4642F1"
  },
  weekendDateNameStyleA: {
    color: "red"
  },
  weekendDateNameStyle: {},
  weekendDateNumberStyleA: {
    color: "red"
  },
  weekendDateNumberStyle: {}
});

export default styles;
