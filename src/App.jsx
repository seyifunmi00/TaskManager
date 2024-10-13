import { useState, useEffect } from "react";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";

function App() {
  // Load tasks from localStorage if available, otherwise use default tasks
  const loadTasksFromLocalStorage = () => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  };

  const [tasks, setTasks] = useState(loadTasksFromLocalStorage);

  const [showForm, setShowForm] = useState(false);

  // Save tasks to localStorage whenever the tasks array changes
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
    setShowForm(false);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const markComplete = (id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        }
        return task;
      })
    );
  };

  const handleEdit = (
    id,
    newTitle,
    newDescription,
    newCategory,
    newDueDate
  ) => {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          title: newTitle,
          description: newDescription,
          category: newCategory,
          dueDate: newDueDate,
        };
      }
      return task;
    });

    setTasks(newTasks);
  };

  const clearTasks = () => {
    setTasks([]);
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-5xl font-extrabold text-center text-teal-500 mb-7">
        Task Manager
      </h1>

      {showForm && <TaskForm addTask={addTask} />}
      <button
        className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded text-center my-4 "
        onClick={() => setShowForm(!showForm)}
      >
        {showForm ? "Hide Form" : "Add Task"}
      </button>
      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
        markComplete={markComplete}
        handleEdit={handleEdit}
      />

      {tasks.length === 0 || (
        <button
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded text-center my-4 "
          onClick={clearTasks}
        >
          Clear Tasks
        </button>
      )}
    </main>
  );
}

export default App;
