import React, { Component } from "react";
import {View} from "react-native";
import CalendarStrip from "react-native-calendar-strip";
import styles from "./styles";

var today = new Date();
dateToday =
  today.getDate() +
  " - " +
  parseInt(today.getMonth() + 1) +
  " - " +
  today.getFullYear();

export default class Calendar extends Component {
  componentDidMount() {
    this.props.isAddTodo ? {} : this.props.showTodo(dateToday);
  }

  passSelectedDate(date, selectedDate) {
    if (this.props.isAddTodo) {
      this.props.showDateTimePicker(date);
    } else {
      this.props.showTodo(selectedDate);
    }
  }

  render() {
    return (
      <View
        style={
          this.props.isAddTodo
            ? styles.containerA
            : styles.container
        }
      >
        <CalendarStrip
          innerStyle={
            this.props.isAddTodo
              ? styles.calendarInnerStyleA
              : styles.calendarInnerStyle
          }
          style={
            this.props.isAddTodo ? styles.calendarStyleA : styles.calendarStyle
          }
          calendarHeaderStyle={
            this.props.isAddTodo
              ? styles.calendarHeaderStyleA
              : styles.calendarHeaderStyle
          }
          calendarColor={"white"}
          dateNameStyle={
            this.props.isAddTodo ? styles.dateNameStyleA : styles.dateNameStyle
          }
          dateNumberStyle={
            this.props.isAddTodo
              ? styles.dateNumberStyleA
              : styles.dateNumberStyle
          }
          highlightDateNameStyle={
            this.props.isAddTodo
              ? styles.highlightDateNameStyleA
              : styles.highlightDateNameStyle
          }
          highlightDateNumberStyle={
            this.props.isAddTodo
              ? styles.highlightDateNumberStyleA
              : styles.highlightDateNumberStyle
          }
          weekendDateNameStyle={
            this.props.isAddTodo
              ? styles.weekendDateNameStyleA
              : styles.weekendDateNameStyle
          }
          weekendDateNumberStyle={
            this.props.isAddTodo
              ? styles.weekendDateNumberStyleA
              : styles.weekendDateNumberStyle
          }
          onDateSelected={date =>
            this.passSelectedDate(date, date.format("D - M - YYYY"))
          }
          startingDate={
            this.props.isAddTodo ? new Date(this.props.startDate) : {}
          }
          selectedDate={
            this.props.isAddTodo ? new Date(this.props.startDate) : {}
          }
          customDatesStyles={[
            {
              dateContainerStyle: {},
              dateNameStyle: this.props.isAddTodo ? {} : styles.dateNameStyleC,
              dateNumberStyle: this.props.isAddTodo
                ? {}
                : styles.dateNumberStyleC
            }
          ]}
          leftSelector={this.props.isAddTodo ? [] : { flex: 1 }}
        />
      </View>
    );
  }
}
