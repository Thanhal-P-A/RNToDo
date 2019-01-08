import React, { Component } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import CalendarStrip from "react-native-calendar-strip";
import styles from "./styles";
import DateTimePicker from "react-native-modal-datetime-picker";

var today = new Date();
dateToday =
  today.getDate() +
  " - " +
  parseInt(today.getMonth() + 1) +
  " - " +
  today.getFullYear();
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
export default class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      month: monthNames[today.getMonth()],
      year: today.getFullYear(),
      isDateTimePickerVisible: false,
      dateForCalendarStrip:today,
    };
  }

  componentDidMount() {
    this.props.isAddTodo ?this.setState({
      dateForCalendarStrip:new Date(this.props.startDate)
    },()=>this.passSelectedDate(
      new Date(this.props.startDate),
      new Date(this.props.startDate).getDate().toString()+" - "+(new Date(this.props.startDate).getMonth()+1).toString()+" - "+new Date(this.props.startDate).getFullYear().toString(),
      new Date(this.props.startDate).getMonth(),
      new Date(this.props.startDate).getFullYear()
    )):this.props.showTodo(dateToday)
  }

  _showDateTimePicker = () =>{
    this.setState({
      isDateTimePickerVisible: true,
    });
  }

  _handleDatePicked = date => {
    this.passSelectedDate(
      date,
      date.getDate().toString()+" - "+(date.getMonth()+1).toString()+" - "+date.getFullYear().toString(),
      date.getMonth(),
      date.getFullYear()
    )
  };

  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  passSelectedDate(date, selectedDate, hMonth, hYear) {
    
    if (this.props.isAddTodo) {
        this.setState({
          isDateTimePickerVisible: false,
          dateForCalendarStrip:new Date(date),
          month: monthNames[hMonth],
          year: hYear
        },()=>this.props.handleDatePicked(new Date(date)));     
    } 
    else {
      this.setState({
        isDateTimePickerVisible: false,
        dateForCalendarStrip:new Date(date),
        month: monthNames[hMonth],
        year: hYear
      },()=>this.props.showTodo(selectedDate));
      
    }
  }


  render() {
    return (
      <View style={this.props.isAddTodo ? styles.containerA : styles.container}>
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
          onDateSelected={date =>this._handleDatePicked(new Date(date))}
          selectedDate={
            this.props.isAddTodo ? 
            new Date(this.props.startDate) 
            : 
            new Date(this.state.dateForCalendarStrip)
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
          iconLeft={require('../../images/vertical-line.jpg')}
          iconRight={require('../../images/vertical-line.jpg')}
          showMonth={false}
        />
        <DateTimePicker
              isVisible={this.state.isDateTimePickerVisible}
              onConfirm={this._handleDatePicked}
              onCancel={this._hideDateTimePicker}
              mode="date"
              date={new Date(this.state.dateForCalendarStrip)}
            />
        <TouchableOpacity
          style={this.props.isAddTodo ? styles.monthYearA : styles.monthYear}
          onPress={() => this._showDateTimePicker(this.state.dateForCalendarStrip)}
        >
          <Text
            style={this.props.isAddTodo ? styles.textMonthA : styles.textMonth}
          >
            {this.state.month}  <Text style={this.props.isAddTodo ? styles.textYearA : styles.textYear}> {this.state.year}</Text>
          </Text>
          {this.props.isAddTodo?<View/>:<Text style={{color:'grey'}}> Your ToDos</Text>}
        </TouchableOpacity>
      </View>
    );
  }
}
