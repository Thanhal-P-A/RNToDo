import { createStackNavigator } from "react-navigation";
import AllLists from "../screens/home";
import AddTodo from "../screens/addTodo";
import GroupTodo from "../screens/groupTodo";
import Intro from "../screens/intro";

const AppNavigator = createStackNavigator(
  {
    Intro: {
      screen: Intro,
      navigationOptions: { header: null }
    },
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
