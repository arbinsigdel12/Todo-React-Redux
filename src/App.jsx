import { Routes, Route, NavLink } from "react-router-dom";
import TodoPage from "./pages/TodoPage";
import ApiPage from "./pages/ApiPage";

export default function App() {
  return (
    <div>
      <nav className="navbar">
        <NavLink
          to="/todos"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Todos
        </NavLink>
        {"      "}
        <NavLink
          to="/api"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          API Data
        </NavLink>
      </nav>

      <div className="container">
        <Routes>
          <Route path="/todos" element={<TodoPage />} />
          <Route path="/api" element={<ApiPage />} />
          <Route path="/" element={<TodoPage />} />
        </Routes>
      </div>
    </div>
  );
}
