import * as types from "../actions/types";

initialState = {
  listArray: [],
  taskNo: {
    ToDo: 0,
    Personal: 0,
    Work: 0,
    Shopping: 0,
    Home: 0,
    Meeting: 0
  },
  dateSelected:
    new Date().getDate() +
    " - " +
    parseInt(new Date().getMonth() + 1) +
    " - " +
    new Date().getFullYear()
};

const updateReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD: {
      if (action.todo != "") {
        const { listArray, taskNo, dateSelected } = state;
        const item = {
          group: action.group.toString(),
          todo: action.todo.toString(),
          time: action.time.toString(),
          date: action.date,
          timestamp: action.timestamp,
          isChecked: false
        };
        ++taskNo[action.group];
        listArray.push(item);
        let temp = listArray[0];
        for (let i = listArray.length; i > 0; i--) {
          for (let j = 0; j < i - 1; j++) {
            if (listArray[j].timestamp > listArray[j + 1].timestamp) {
              let temp = listArray[j];
              listArray[j] = listArray[j + 1];
              listArray[j + 1] = temp;
            }
          }
        }
        return { listArray, taskNo, dateSelected, updatedAt: new Date() };
      }
    }
    case types.REMOVE: {
      const { listArray, taskNo, dateSelected } = state;
      --taskNo[action.group];
      listArray.splice(action.index, 1);
      return { listArray, taskNo, dateSelected, updatedAt: new Date() };
    }
    case types.SHOW: {
      const { listArray, taskNo, dateSelected } = state;
      return {
        listArray,
        taskNo,
        dateSelected: action.selectedDate,
        updatedAt: new Date()
      };
    }
    case types.CHECKED: {
      const { listArray, taskNo, dateSelected } = state;
      if (listArray[action.index].isChecked) {
        listArray[action.index].isChecked = false;
        return {
          taskNo,
          listArray,
          dateSelected,
          updatedAt: new Date()
        };
      } else {
        listArray[action.index].isChecked = true;
        return {
          listArray,
          taskNo,
          dateSelected,
          updatedAt: new Date()
        };
      }
    }
    default:
      return state;
  }
};

export default updateReducer;
