import { createSlice } from "@reduxjs/toolkit";

const todoReducer = createSlice({
  name: 'todos',
  initialState: {
    todo: '',
    todoList: [{ id: 1, content: '洗濯', status: '未完了' }],
    editId: null
  },
  reducers: {
    setTodo(state, action) {
      state.todo = action.payload
    },
    addTodo(state, action) {
      state.todoList.push(action.payload);
      state.todo = '';
    },
    completeTodo(state, action) {
      state.todoList = state.todoList.filter(todo => todo.id !== action.payload);
    },
    editTodo(state, action) {
      state.editId = action.payload;
    },
    updateTodo(state, action) {
      const { id, newContent } = action.payload;
      const todo = state.todoList.find((todo) => todo.id === id);
      if (todo) {
        todo.content = newContent;
      }
      state.editId = null;
    },
  }
})

export const { setTodo, addTodo, completeTodo, editTodo, updateTodo } = todoReducer.actions;
export default todoReducer.reducer