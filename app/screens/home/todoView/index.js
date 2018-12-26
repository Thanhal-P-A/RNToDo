import React, { Component } from "react";
import { View, Text, Button, Dimensions, Alert } from "react-native";
import { Icon } from "react-native-elements";
import Swipeout from "react-native-swipeout";
import styles from "./styles";

import { Group } from "../../../utils/group";

var { height, width } = Dimensions.get("window");

export default class TodoView extends Component {
  _onPressEditButton() {
    this.props.navigation.navigate("AddTodo", {
      editTodo: this.props.todo,
      isEdit: true,
      index: this.props.index,
      group: this.props.group,
      dateEdit: this.props.date,
      timeEdit:this.props.time
    });
    this.props.dismissSwipeout();
  }

  _onPressCheckButton() {
    this.props.checkTodo(this.props.index);
    this.props.dismissSwipeout();
  }

  _onPressDeleteButton() {
    {
      Alert.alert("Delete", "Confirm?", [
        { text: "Cancel" },
        {
          text: "OK",
          onPress: () =>
            this.props.removeTodo(this.props.index, this.props.group)
        }
      ]);
      this.props.dismissSwipeout();
    }
  }

  render() {
    const swipeTodo = [
      {
        component: (
          <View style={styles.viewSwipeComponent}>
            <Icon
              containerStyle={styles.iconContainer}
              size={28}
              name="edit"
              type="font-awesome"
              color="white"
              onPress={() => this._onPressEditButton()}
            />
          </View>
        ),
        backgroundColor: "#0091F8"
      },
      {
        component: (
          <View style={styles.viewSwipeComponent}>
            <Icon
              containerStyle={styles.iconContainer}
              size={28}
              name="check-circle"
              type="font-awsome"
              color="white"
              onPress={() => this._onPressCheckButton()}
            />
          </View>
        ),
        backgroundColor: "#0091F8"
      },
      {
        component: (
          <View style={styles.viewSwipeComponent}>
            <Icon
              containerStyle={styles.iconContainer}
              size={28}
              name="delete"
              color="white"
              onPress={() => this._onPressDeleteButton()}
            />
          </View>
        ),
        backgroundColor: "#0091F8"
      }
    ];
    if (this.props.date === this.props.dateSelected) {
      return (
        <Swipeout
          right={swipeTodo}
          autoClose={true}
          backgroundColor="transparent"
          close={this.props.isCloseSwipeout}
        >
          <View style={styles.viewTodoContainer}>
            <View style={styles.iconTodoGroup}>
              <Icon
                containerStyle={{}}
                size={height * 0.03}
                name={Group[this.props.group].icon}
                type="entypo"
                color={Group[this.props.group].iconColor}
              />
            </View>
            <View style={styles.viewTodo}>
              <View style={styles.viewTodoCheck}>
                <Text style={styles.textTodo}>{this.props.todo}</Text>
                {this.props.isChecked ? (
                  <Icon
                    containerStyle={styles.iconChecked}
                    size={14}
                    name="check-circle"
                    type="font-awsome"
                    color="#0091F8"
                  />
                ) : (
                  <View />
                )}
              </View>
              <Text style={styles.textGroup}>{this.props.group}</Text>
            </View>
            <View style={styles.viewTime}>
              <Text style={styles.textTime}>{this.props.time}</Text>
            </View>
          </View>
        </Swipeout>
      );
    } else {
      return <View />;
    }
  }
}
