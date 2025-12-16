import { useTasks } from "../hooks/useTask";
import { useState } from "react";

export function TaskList() {
  const { tasks, addTask, toggleTask, removeTask } = useTasks();
  const [title, setTitle] = useState("");

  function handleAdd() {
    if (!title.trim()) return;
    addTask(title);
    setTitle("");
  }

  return (
    <div className="task-container">
      <h2 className="task-title">Lista de Tarefas</h2>

      <div className="task-input-area">
        <input
          className="task-input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Digite uma nova tarefa..."
        />
        <button className="task-add-btn" onClick={handleAdd}>
          Adicionar
        </button>
      </div>

      <ul className="task-list">
        {tasks.map((task) => (
          <li className="task-item" key={task.id}>
            <label className="task-content">
              <input
                type="checkbox"
                checked={task.done}
                onChange={() => toggleTask(task.id)}
              />
              <span className={task.done ? "task-done" : ""}>
                {task.title}
              </span>
            </label>

            <button
              className="task-delete-btn"
              onClick={() => removeTask(task.id)}
            >
              Excluir
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}