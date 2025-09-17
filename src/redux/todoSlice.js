import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, text: "React Todo", completed: false },
];

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {


    addTodo: (state, action) => {
      state.push({
        id: Date.now(),
        text: action.payload,
        completed: false,
      });
    },


    toggleTodo: (state, action) => {
      const todo = state.find((t) => t.id == action.payload);
      if (todo!=null)
      {
        todo.completed = !todo.completed;
      }
    },


    deleteTodo: (state, action) => {
      return state.filter((t) => t.id !== action.payload);
    },

    
    editTodo: (state, action) => {
      const { id, text } = action.payload;
      const todo = state.find((t) => t.id === id);
      if (todo!=null) {
        todo.text = text;
      }
        
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo, editTodo } = todoSlice.actions;
export default todoSlice.reducer;