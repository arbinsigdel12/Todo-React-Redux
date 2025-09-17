import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleTodo, deleteTodo, editTodo } from "../redux/todoSlice";
import { useState } from "react";
import "../styles/styles.css";

export default function TodoPage() {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const [editing, setEditing] = useState({ id: null, text: "" });

  const handleSubmit = (e) => {
    //avoiding default reload of form
    e.preventDefault();
    // if empty
    if (input.trim()) {
      dispatch(addTodo(input));
      setInput("");
    }
  };

  const handleSave = () => {
    if (editing.text.trim()) {
      // apply editTodo function from redux operation
      dispatch(editTodo({ id: editing.id, text: editing.text }));
      // stop editing
      setEditing({ id: null, text: "" });
    }
  };

  return (
    <div className="container">
      <h2>Todo List</h2>

      <form onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new todo"
        />
        <button>Add</button>
      </form>

      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => dispatch(toggleTodo(todo.id))}
            />

            {/* if else to check if edit is clicked or not */}
            {editing.id === todo.id ? (
              <>
                <input
                  value={editing.text}
                  // save all value except text and change text
                  onChange={(e) => setEditing({ ...editing, text: e.target.value })}
                />
                <button onClick={handleSave}>Save</button>
                <button onClick={() => setEditing({ id: null, text: "" })}>Cancel</button>
              </>
            )       
            : 
            (
              <>
                {/* class to apply line through */}
                <span className={todo.completed ? "completed" : ""}>
                  {todo.text}
                </span>
                <button onClick={() => setEditing({ id: todo.id, text: todo.text })}>
                  Edit
                </button>
                <button onClick={() => dispatch(deleteTodo(todo.id))}>
                  Delete
                </button>
              </>
            )   

          }
          </li>
        ))}
      </ul>
    </div>
  );
}