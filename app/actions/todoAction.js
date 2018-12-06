import * as types from "./types";

export const addTodo = (todo, group, time, date, timestamp) => ({
  type: types.ADD,
  todo,
  group,
  time,
  date,
  timestamp
});

export const removeTodo = (index, group) => ({
  type: types.REMOVE,
  index,
  group
});

export const showTodo = selectedDate => ({
  type: types.SHOW,
  selectedDate
});

export const checkTodo = index => ({
  type: types.CHECKED,
  index
});
