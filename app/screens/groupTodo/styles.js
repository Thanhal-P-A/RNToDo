import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eceaef"
  },
  viewTop: {
  },
  viewFlatlist: {
    flex: 1,
    backgroundColor: "#f7f7f7",
  },
  viewBottom: {
    height:50,
    flexDirection: "row",
    backgroundColor: "#cdcdd3",
  },
  textInputTodo: {
    paddingLeft: 10,
    fontSize: 20,
    paddingRight:50
  },
  addButton:{
    backgroundColor:'#4642F1',
    position:'absolute',
    elevation:5,
    height:50,
    width:50,
    borderRadius:25,
    alignItems:'center',
    justifyContent:'center',
    alignSelf:'flex-end',
    top:'90%',
    right:'5%'
  },
  textAddButton:{
    color:"white",
    fontSize:30
  }
});

export default styles;
