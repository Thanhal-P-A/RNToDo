import React, { Component } from "react";
import { View, Text, Dimensions } from "react-native";
import { Icon } from "react-native-elements";
import styles from "./styles";

var { height } = Dimensions.get("window");

export default class GroupCard extends Component {
  render() {
    if (this.props.titleCheck == this.props.title) {
      return (
        <View style={styles.containerSelected}>
          <Icon
            containerStyle={styles.iconContainer}
            size={height * 0.025}
            name={this.props.icon}
            color="white"
            type="entypo"
          />
          <Text style={styles.textSelectedTitle}>{this.props.title}</Text>
          <Text style={styles.textSelectedTaskNo}>
            {this.props.taskNo} tasks
          </Text>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <Icon
            containerStyle={styles.iconContainer}
            size={height * 0.025}
            name={this.props.icon}
            color={this.props.iconColor}
            type="entypo"
          />
          <Text style={styles.textTitle}>{this.props.title}</Text>
          <Text style={styles.textTaskNo}>{this.props.taskNo} tasks</Text>
        </View>
      );
    }
  }
}
