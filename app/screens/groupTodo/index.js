import React, { Component } from "react";
import { Text, View, TouchableOpacity, FlatList } from "react-native";
import styles from "./styles";
import { addTodo, removeTodo, checkTodo } from "../../actions/todoAction";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import TodoView from "./todoView";
import Header from "../../components/header";
export class GroupTodo extends Component {
  constructor() {
    super();
    today = new Date();
    dateToday =
      today.getDate() +
      " - " +
      parseInt(today.getMonth() + 1) +
      " - " +
      today.getFullYear();
    this.state = {
      isCloseSwipeout: false,
      isLoading: true
    };
  }

  _dismissSwipeout = () => {
    this.setState({
      isCloseSwipeout: true
    });
  };

  addTodo = () => {
    this.props.navigation.navigate("AddTodo", {
      group: this.props.navigation.state.params.title,
      dateEdit: dateToday
    });
  };

  render() {
    return (
      <TouchableOpacity
        onPress={this._dismissSwipeout}
        style={styles.container}
        activeOpacity={1}
      >
        <Header
          {...this.props}
          title={this.props.navigation.state.params.title}
          iconName={this.props.navigation.state.params.icon}
          iconColor={this.props.navigation.state.params.iconColor}
          taskNo={this.props.taskNo[this.props.navigation.state.params.title]}
        />
        <View style={styles.viewFlatlist}>
          {this.props.listArray.length != 0 ? (
            <FlatList
              style={styles.flatList}
              data={this.props.listArray}
              extraData={[this.props, this.state]}
              renderItem={({ item, index }) => {
                return (
                  <TouchableOpacity>
                    <TodoView
                      iconColor={this.props.navigation.state.params.iconColor}
                      dismissSwipeout={this._dismissSwipeout}
                      {...this.props}
                      length={this.props.listArray.length}
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
          ) : (
            <TodoView isNoTask={true} />
          )}
        </View>
        <TouchableOpacity onPress={this.addTodo} style={styles.addButton}>
          <Text style={styles.textAddButton}>+</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    );
  }
}

const mapStateToProps = state => {
  console.log("STATE VALUES GROUPTODO: ", state);
  const { listArray, taskNo, updatedAt } = state.updateReducer;
  return { listArray, taskNo, updatedAt };
};
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addTodo,
      removeTodo,
      checkTodo
    },
    dispatch
  );
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupTodo);
