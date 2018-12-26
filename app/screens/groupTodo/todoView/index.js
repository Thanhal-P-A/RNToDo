import React, { Component } from "react";
import { View, Text, Button, Alert ,Dimensions} from "react-native";
import { Icon } from "react-native-elements";
import styles from "./styles";
import Swipeout from "react-native-swipeout";
// import PushNotification from "react-native-push-notification";
var { height, width } = Dimensions.get("window");

export default class TodoView extends Component {
  _onPressEditButton() {
    this.props.navigation.navigate("AddTodo", {
      editTodo: this.props.todo,
      isEdit: true,
      index: this.props.index,
      group: this.props.group,
      dateEdit: this.props.date,
      timeEdit: this.props.time
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
          onPress: () =>[
            // PushNotification.cancelLocalNotificationById(this.props.listArray[this.props.index].id),
            this.props.removeTodo(this.props.index, this.props.group)]
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
              containerStyle={styles.swiperIconContainer}
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
              containerStyle={styles.swiperIconContainer}
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
              containerStyle={styles.swiperIconContainer}
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
    if (this.props.group == this.props.navigation.state.params.title) {
      return (
        <Swipeout
          right={swipeTodo}
          autoClose={true}
          backgroundColor="transparent"
          close={this.props.isCloseSwipeout}
        >
          <View style={styles.container}>
            <View style={styles.viewTimeDate}>
              <Icon
              size={width*.05}
              name={this.props.isChecked?"check-circle":"clock-o"}
              type='font-awesome'
              color={this.props.isChecked?"#0091F8":'grey'}
            />
              <Text style={styles.textTime}>{this.props.time}</Text>
            </View>
            <View style={[styles.viewTodoCheck,{borderColor:this.props.iconColor}]}>
              <Text style={styles.textTodo}>{this.props.todo}</Text>
            
            <Text style={styles.textDate}>{this.props.date}</Text>
            </View>
          </View>
        </Swipeout>
      );
    } else {
      return <View />;
    }
  }
}
