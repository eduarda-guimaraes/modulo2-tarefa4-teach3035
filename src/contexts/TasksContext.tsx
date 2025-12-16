import { createContext, ReactNode, useState } from "react";
import { v4 as uuid } from "uuid";
import { Task } from "../types/Task";

interface TasksContextType {
  tasks: Task[];
  addTask: (title: string) => void;
  toggleTask: (id: string) => void;
  removeTask: (id: string) => void;
}

export const TasksContext = createContext<TasksContextType | null>(null);

export function TasksProvider({ children }: { children: ReactNode }) {
  const [tasks, setTasks] = useState<Task[]>([]);

  function addTask(title: string) {
    const newTask: Task = {
      id: uuid(),
      title,
      done: false,
    };
    setTasks(prev => [...prev, newTask]);
  }

  function toggleTask(id: string) {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  }

  function removeTask(id: string) {
    setTasks(prev => prev.filter(task => task.id !== id));
  }

  return (
    <TasksContext.Provider
      value={{ tasks, addTask, toggleTask, removeTask }}
    >
      {children}
    </TasksContext.Provider>
  );
}