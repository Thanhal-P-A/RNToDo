import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Dimensions
} from "react-native";
import { Icon } from "react-native-elements";
import styles from "./styles";
import {
  addTodo,
  removeTodo,
  showTodo,
  checkTodo
} from "../../actions/todoAction";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import GroupCard from "../../components/groupCard";
import Calendar from "../../components/calendarStrip";
import TodoView from "./todoView";

var { height, width } = Dimensions.get("window");

export class AllLists extends Component {
  constructor() {
    super();
    this.state = {
      isCloseSwipeout: false
    };
  }

  _dismissSwipeout = () => {
    this.setState({
      isCloseSwipeout: true
    });
  };

  personalGroup = () => {
    this.props.navigation.navigate("GroupTodo", {
      title: "Personal",
      icon: "heart",
      iconColor: "red"
    });
  };

  workGroup = () =>
    this.props.navigation.navigate("GroupTodo", {
      title: "Work",
      icon: "briefcase",
      iconColor: "steelblue"
    });

  shoppingGroup = () =>
    this.props.navigation.navigate("GroupTodo", {
      title: "Shopping",
      icon: "shopping-cart",
      iconColor: "green"
    });

  homeGroup = () =>
    this.props.navigation.navigate("GroupTodo", {
      title: "Home",
      icon: "home",
      iconColor: "#eacc23"
    });

  meetingGroup = () =>
    this.props.navigation.navigate("GroupTodo", {
      title: "Meeting",
      icon: "old-phone",
      iconColor: "brown"
    });

  todoGroup = () =>
    this.props.navigation.navigate("GroupTodo", {
      title: "ToDo",
      icon: "unread",
      iconColor: "#9696f2"
    });

  render() {
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={this._dismissSwipeout}
        activeOpacity={1}
      >
        <View style={styles.viewTop}>
          <Calendar {...this.props} isAddTodo={false} />
        </View>
        <View style={styles.viewTodoList}>
          <FlatList
            style={styles.flatList}
            data={this.props.listArray}
            extraData={[this.props, this.state]}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity>
                  <TodoView
                    {...this.props}
                    todo={item.todo}
                    index={index}
                    group={item.group}
                    time={item.time}
                    date={item.date}
                    isChecked={item.isChecked}
                    isCloseSwipeout={this.state.isCloseSwipeout}
                  />
                </TouchableOpacity>
              );
            }}
            keyExtractor={(item, index) => item.todo}
          />
        </View>
        <View style={styles.viewBottom}>
          <Text style={styles.textBottom}>Add More</Text>
          <View style={styles.viewBottomPart}>
            <TouchableOpacity style={{ flex: 1 }} onPress={this.personalGroup}>
              <GroupCard
                icon="heart"
                iconColor="red"
                title="Personal"
                taskNo={this.props.taskNo.Personal}
              />
            </TouchableOpacity>
            <TouchableOpacity style={{ flex: 1 }} onPress={this.workGroup}>
              <GroupCard
                icon="briefcase"
                iconColor="steelblue"
                title="Work"
                taskNo={this.props.taskNo.Work}
              />
            </TouchableOpacity>
            <TouchableOpacity style={{ flex: 1 }} onPress={this.shoppingGroup}>
              <GroupCard
                icon="shopping-cart"
                iconColor="green"
                title="Shopping"
                taskNo={this.props.taskNo.Shopping}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.viewBottomPart}>
            <TouchableOpacity style={{ flex: 1 }} onPress={this.homeGroup}>
              <GroupCard
                icon="home"
                iconColor="#eacc23"
                title="Home"
                taskNo={this.props.taskNo.Home}
              />
            </TouchableOpacity>
            <TouchableOpacity style={{ flex: 1 }} onPress={this.meetingGroup}>
              <GroupCard
                icon="old-phone"
                iconColor="brown"
                title="Meeting"
                taskNo={this.props.taskNo.Meeting}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{ flex: 1 }}
              onPress={() => this.props.navigation.navigate("AddTodo",{del:false})}
              onLongPress={this.todoGroup}
            >
              <View style={styles.viewAddCard}>
                <Icon
                  containerStyle={styles.iconContainerAdd}
                  size={height * 0.025}
                  name="plus"
                  color="white"
                  type="entypo"
                />
                <Text
                  style={styles.textAddmore}
                >
                  Add More
                </Text>
                <Text style={styles.textTodoAddCard}>
                  ToDo
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const mapStateToProps = state => {
  console.log("STATE VALUES: ", state);
  const { listArray, taskNo, dateSelected, updatedAt } = state.updateReducer;
  return { listArray, taskNo, dateSelected, updatedAt };
};
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addTodo,
      removeTodo,
      showTodo,
      checkTodo
    },
    dispatch
  );
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllLists);
