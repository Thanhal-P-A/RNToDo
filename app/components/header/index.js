import React, { Component } from "react";
import { View, Text } from "react-native";
import { Icon } from "react-native-elements";
import { styles } from "./styles";

export default class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.viewMain}>
          <Icon
            size={26}
            name={this.props.iconName}
            type="entypo"
            color={this.props.iconColor}
          />
          <Text style={styles.textTaskNo}>{this.props.taskNo} Tasks</Text>
        </View>

        <Text style={styles.textTitle}>{this.props.title}</Text>
      </View>
    );
  }
}
