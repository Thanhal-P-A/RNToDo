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
  monthYearA:{
    flex:1,
    position:'absolute',
    paddingTop:20,
    paddingLeft:10,
    elevation:5,
    width:"100%",
    alignItems:'center'
  },
  monthYear:{
    flex:1,
    position:'absolute',
    paddingTop:20,
    paddingLeft:10,
    elevation:5,
  },
  textMonthA:{
    color:'black',
    fontSize:height * 0.03,
    fontWeight:'400',
  },
  textMonth:{
    color:'black',
    fontSize:height * 0.04,
    fontWeight:"400"
  },
  textYear:{
    fontSize:height * 0.038,
    color:'grey',
    fontWeight:'normal',
  },
  textYearA:{
    fontSize:height * 0.027,
    color:'grey',
    fontWeight:'normal',
  },
  calendarInnerStyleA: {
    flex: 1,
    paddingTop:30,
  },
  calendarInnerStyle: {
    flex: 1,
    paddingTop:40,
    // paddingHorizontal:6
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
