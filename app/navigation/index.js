import { createStackNavigator } from "react-navigation";
import AllLists from "../screens/home";
import AddTodo from "../screens/addTodo";
import GroupTodo from "../screens/groupTodo";

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: AllLists,
      navigationOptions: { header: null }
    },
    AddTodo: {
      screen: AddTodo,
      navigationOptions: { header: null }
    },
    GroupTodo: {
      screen: GroupTodo,
      navigationOptions: { header: null }
    }
  },
  {
    initialRouteName: "Home"
  }
);

export default AppNavigator;
