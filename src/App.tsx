import { TasksProvider } from "./contexts/TasksContext";
import { Home } from "./pages/Home";
import "./App.css";

export default function App() {
  return (
    <TasksProvider>
      <Home />
    </TasksProvider>
  );
}