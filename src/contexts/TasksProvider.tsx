// context/TasksProvider.tsx
import { ReactNode, useState } from "react";
import { TasksContext } from "./TasksContext";
import { Task } from "../types/Task";
import { v4 as uuid } from "uuid";

interface Props {
  children: ReactNode;
}

export function TasksProvider({ children }: Props) {
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