import React, { Component } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import GroupCard from "../groupCard";
import styles from "./styles";

export default class Group extends Component {

  pressHandler(grpName) {
    this.props.groupSelect(grpName);
    this.setState({ titleClicked: grpName });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.viewPart}>
          <TouchableOpacity
            style={{ flex: 1 }}
            onPress={() => this.pressHandler("Personal")}
          >
            <GroupCard
              icon="heart"
              iconColor="red"
              title="Personal"
              taskNo={this.props.taskNo.Personal}
              titleCheck={this.props.group}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flex: 1 }}
            onPress={() => this.pressHandler("Work")}
          >
            <GroupCard
              icon="briefcase"
              iconColor="steelblue"
              title="Work"
              taskNo={this.props.taskNo.Work}
              titleCheck={this.props.group}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flex: 1 }}
            onPress={() => this.pressHandler("Shopping")}
          >
            <GroupCard
              icon="shopping-cart"
              iconColor="green"
              title="Shopping"
              taskNo={this.props.taskNo.Shopping}
              titleCheck={this.props.group}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.viewPart}>
          <TouchableOpacity
            style={{ flex: 1 }}
            onPress={() => this.pressHandler("Home")}
          >
            <GroupCard
              icon="home"
              iconColor="#eacc23"
              title="Home"
              taskNo={this.props.taskNo.Home}
              titleCheck={this.props.group}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flex: 1 }}
            onPress={() => this.pressHandler("Meeting")}
          >
            <GroupCard
              icon="old-phone"
              iconColor="brown"
              title="Meeting"
              taskNo={this.props.taskNo.Meeting}
              titleCheck={this.props.group}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flex: 1 }}
            onPress={() => this.pressHandler("ToDo")}
          >
            <GroupCard
              icon="unread"
              iconColor="#9696f2"
              title="ToDo"
              taskNo={this.props.taskNo.ToDo}
              titleCheck={this.props.group}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
