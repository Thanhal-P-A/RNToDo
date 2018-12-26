import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  Keyboard,
  TouchableOpacity,
  ScrollView,
  FlatList,
  TouchableWithoutFeedback
} from "react-native";
import DateTimePicker from "react-native-modal-datetime-picker";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ToggleSwitch from "toggle-switch-react-native";
import moment from "moment/src/moment";

import { addTodo, removeTodo } from "../../actions/todoAction";
import Group from "../../components/group";
import Calendar from "../../components/calendarStrip";
import styles from "./styles";

const hour = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const minute = ["05", 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, "00"];

export class AddTodo extends Component {
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
      dateForCalendarStrip: new Date(),
      isDateTimePickerVisible: false,
      groupName: "ToDo",
      holder: "",
      selectedDate: dateToday,
      selectedTime: "",
      timestamp: moment(dateToday, "D - M - YYYY").valueOf() - 1,
      isOnToggle: false,
      isHourSelected: "7",
      isMinuteSelected: "30",
      isAM: true,
      bumpedUp: 0
    };
  }

  _assignSelectedTime() {
    if (this.state.isOnToggle) {
      if (this.state.isAM) {
        this.setState(
          {
            selectedTime:
              this.state.isHourSelected +
              " : " +
              this.state.isMinuteSelected +
              " AM"
          },
          () => {
            this._assignTimestamp();
          }
        );
      } else {
        this.setState(
          {
            selectedTime:
              this.state.isHourSelected +
              " : " +
              this.state.isMinuteSelected +
              " PM"
          },
          () => {
            this._assignTimestamp();
          }
        );
      }
    } else {
      this.setState(
        {
          selectedTime: ""
        },
        () => {
          this._assignTimestamp();
        }
      );
    }
  }

  _assignTimestamp() {
    if (this.state.isOnToggle) {
      this.setState({
        timestamp: moment(
          this.state.selectedDate.toString() +
            this.state.selectedTime.toString(),
          "D - M - YYYYh : mm A"
        ).valueOf()
      });
    } else {
      this.setState({
        timestamp:
          moment(
            this.state.selectedDate.toString() +
              this.state.selectedTime.toString(),
            "D - M - YYYYh : mm A"
          ).valueOf() - 1
      });
    }
  }

  _dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  _showDateTimePicker = dateFromCalendarStrip =>
    this.setState({
      isDateTimePickerVisible: true,
      dateForCalendarStrip: dateFromCalendarStrip
    });

  _handleDatePicked = date => {
    if (date.getTime() > today.getTime()) {
      this.setState({
        dateForCalendarStrip: date,
        selectedDate:
          date.getDate() +
          " - " +
          parseInt(date.getMonth() + 1) +
          " - " +
          date.getFullYear()
      });
      this._assignTimestamp();
      this._hideDateTimePicker();
    } else {
      this.setState({
        isOnToggle: false,
        selectedTime: "",
        dateForCalendarStrip: date,
        selectedDate:
          date.getDate() +
          " - " +
          parseInt(date.getMonth() + 1) +
          " - " +
          date.getFullYear()
      });
      this._assignTimestamp();
      this._hideDateTimePicker();
    }
  };

  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  _onToggleFunction = () => {
    if (today.getTime() < this.state.timestamp + 86400000) {
      if (this.state.isOnToggle) {
        this.setState(
          {
            isOnToggle: false,
            selectedTime: ""
          },
          () => {
            this._assignSelectedTime();
          }
        );
      } else {
        this.setState(
          {
            isOnToggle: true
          },
          () => {
            this._assignSelectedTime();
          }
        );
      }
    }
  };

  _onPressHour = item => {
    this.setState(
      {
        isHourSelected: item
      },
      () => {
        this._assignSelectedTime();
      }
    );
  };

  _onPressAM = () => {
    this.setState(
      {
        isAM: true
      },
      () => {
        this._assignSelectedTime();
      }
    );
  };

  _onPressMinute = item => {
    this.setState(
      {
        isMinuteSelected: item
      },
      () => {
        this._assignSelectedTime();
      }
    );
  };

  _onPressPM = () => {
    this.setState({ isAM: false }, () => {
      this._assignSelectedTime();
    });
  };

  _onChangeText = TextInputValue => {
    this.setState({ holder: TextInputValue });
  };

  _onButtonPress = () => {
    if (this.state.holder.trim() != "") {
      if (isEdit) {
        this.props.removeTodo(index, group);
      }
      this.props.addTodo(
        this.state.holder.trim(),
        this.state.groupName,
        this.state.selectedTime,
        this.state.selectedDate,
        this.state.timestamp
      );
      this.props.navigation.navigate("Home");
      this.setState({ holder: "" });
    }
  };

  _groupSelect = grpName => {
    this.setState({ groupName: grpName });
  };

  componentDidMount() {
    if (minuteEdit < 10) {
      minuteEdit = "0" + minuteEdit;
    }
    if (hourEdit == 0) {
      hourEdit = 12;
    }
    if (moment(dateEdit, "DD - MM - YYYY").valueOf() > today.getTime()) {
      if (timeEdit == "") {
        this.setState(
          {
            groupName: group,
            holder: editTodo,
            selectedDate: dateEdit,
            dateForCalendarStrip: dateForCalendarEdit
          },
          () => {
            this._assignSelectedTime();
          }
        );
      } else if (timeEditDate.hour() >= 12) {
        this.setState(
          {
            isAM: false,
            isOnToggle: true,
            groupName: group,
            holder: editTodo,
            selectedDate: dateEdit,
            dateForCalendarStrip: dateForCalendarEdit,
            isHourSelected: hourEdit,
            isMinuteSelected: minuteEdit
          },
          () => {
            this._assignSelectedTime();
          }
        );
      } else {
        this.setState(
          {
            isOnToggle: true,
            groupName: group,
            holder: editTodo,
            selectedDate: dateEdit,
            dateForCalendarStrip: dateForCalendarEdit,
            isHourSelected: hourEdit,
            isMinuteSelected: minuteEdit
          },
          () => {
            this._assignSelectedTime();
          }
        );
      }
    } else {
      this.setState(
        {
          isOnToggle: false,
          selectedTime: "",
          groupName: group,
          holder: editTodo,
          selectedDate: dateEdit,
          dateForCalendarStrip: dateForCalendarEdit
        },
        () => {
          this._assignSelectedTime();
        }
      );
    }
  }

  render() {
    const { navigation } = this.props;
    editTodo = navigation.getParam("editTodo", "");
    isEdit = navigation.getParam("isEdit", "");
    index = navigation.getParam("index");
    group = navigation.getParam("group", "ToDo");
    dateEdit = navigation.getParam("dateEdit", this.state.selectedDate);
    dateForCalendarEdit = moment(dateEdit, "DD - MM - YYYY");
    timeEdit = navigation.getParam("timeEdit", "");
    timeEditDate = moment("21-09-2018T" + timeEdit, "DD-MM-YYYYTh : mm A");
    hourEdit =
      timeEditDate.hour() > 12 ? timeEditDate.hour() - 12 : timeEditDate.hour();

    minuteEdit = timeEditDate.minutes();
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={this._dismissKeyboard}
        activeOpacity={1}
      >
        <ScrollView>
          <View style={styles.viewDateSelector}>
            <Calendar
              isAddTodo={true}
              startDate={this.state.dateForCalendarStrip}
              showDateTimePicker={this._showDateTimePicker}
            />
            <DateTimePicker
              isVisible={this.state.isDateTimePickerVisible}
              onConfirm={this._handleDatePicked}
              onCancel={this._hideDateTimePicker}
              mode="date"
              date={new Date(this.state.dateForCalendarStrip)}
            />
          </View>
          <View style={styles.viewGroupSelector}>
            <Group
              taskNo={this.props.taskNo}
              groupSelect={this._groupSelect}
              group={this.state.groupName}
            />
          </View>
          <View style={styles.viewSetReminder}>
            <Text style={styles.textSetReminder}>Set Reminder</Text>
            <ToggleSwitch
              isOn={this.state.isOnToggle}
              onColor="#00DA9F"
              offColor="#cecece"
              labelStyle={{ justifyContent: "space-between" }}
              size="small"
              onToggle={this._onToggleFunction}
            />
          </View>
          <View style={this.state.isOnToggle ? { flex: 1 } : { height: 0 }}>
            <Text
              style={
                this.state.isOnToggle ? styles.textSetTime : { fontSize: 0 }
              }
            >
              Set Time
            </Text>
            <View>
              <View
                style={
                  this.state.isOnToggle
                    ? styles.viewTimeSelector
                    : { height: 0 }
                }
              >
                <FlatList
                  style={styles.flatList}
                  data={hour}
                  extraData={this.state.isHourSelected}
                  horizontal={true}
                  renderItem={({ item, index }) => {
                    return (
                      <TouchableWithoutFeedback
                        onPress={() => this._onPressHour(item)}
                      >
                        <View style={styles.viewTime}>
                          <Text
                            style={
                              this.state.isHourSelected == item
                                ? styles.textTimeSelected
                                : styles.textTime
                            }
                          >
                            {item}
                          </Text>
                        </View>
                      </TouchableWithoutFeedback>
                    );
                  }}
                  keyExtractor={(item, index) => index.toString()}
                />
                <TouchableWithoutFeedback onPress={this._onPressAM}>
                  <View style={styles.viewType}>
                    <Text
                      style={
                        this.state.isAM
                          ? styles.textTypeSelected
                          : styles.textType
                      }
                    >
                      AM
                    </Text>
                  </View>
                </TouchableWithoutFeedback>
              </View>
              <View
                style={
                  this.state.isOnToggle
                    ? styles.viewTimeSelector
                    : { height: 0 }
                }
              >
                <FlatList
                  style={styles.flatList}
                  data={minute}
                  extraData={this.state.isMinuteSelected}
                  horizontal={true}
                  renderItem={({ item, index }) => {
                    return (
                      <TouchableOpacity
                        onPress={() => this._onPressMinute(item)}
                      >
                        <View style={styles.viewTime}>
                          <Text
                            style={
                              this.state.isMinuteSelected == item
                                ? styles.textTimeSelected
                                : styles.textTime
                            }
                          >
                            {item}
                          </Text>
                        </View>
                      </TouchableOpacity>
                    );
                  }}
                  keyExtractor={(item, index) => index.toString()}
                />
                <TouchableWithoutFeedback onPress={this._onPressPM}>
                  <View style={styles.viewType}>
                    <Text
                      style={
                        this.state.isAM
                          ? styles.textType
                          : styles.textTypeSelected
                      }
                    >
                      PM
                    </Text>
                  </View>
                </TouchableWithoutFeedback>
              </View>
            </View>
          </View>
        </ScrollView>
        <View
          style={[
            styles.viewTextInput,
            this.state.bumpedUp && styles.bumpedcontainer
          ]}
        >
          <TextInput
            value={this.state.holder}
            style={styles.textInputTodo}
            placeholderTextColor="#ABABAB"
            placeholder={"Type here"}
            multiline={true}
            onChangeText={this._onChangeText}
            onFocus={() => this.setState({ bumpedUp: 1 })}
            onEndEditing={() => this.setState({ bumpedUp: 0 })}
          />
        </View>
        <TouchableOpacity
          style={styles.doneButton}
          onPress={this._onButtonPress}
        >
          <Text style={styles.textDoneButton}>Done</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    );
  }
}

const mapStateToProps = state => {
  const { listArray, updatedAt, dateSelected, taskNo } = state.updateReducer;
  return { listArray, updatedAt, dateSelected, taskNo };
};
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addTodo,
      removeTodo
    },
    dispatch
  );
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTodo);
