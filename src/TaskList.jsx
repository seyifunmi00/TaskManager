/* eslint-disable react/prop-types */
import TaskItem from "./TaskItem";
import { useState } from "react";

function TaskList({ tasks, deleteTask, markComplete, handleEdit }) {
  const [sortOrder, setSortOrder] = useState("default");

  // Sorting function based on sortOrder
  const sortedTasks = () => {
    let sorted = [...tasks]; // Create a copy to avoid mutating the original array

    if (sortOrder === "date") {
      // Sorting by date (assuming `task.dueDate` is a valid date string or object)
      sorted.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
    } else if (sortOrder === "completed") {
      // Sorting by completion status (false -> true)
      sorted.sort((a, b) => a.completed - b.completed);
    }
    return sorted;
  };

  return (
    <div>
      {/* Render sorted tasks */}
      {sortedTasks().map((task) => (
        <TaskItem
          task={task}
          key={task.id}
          deleteTask={deleteTask}
          markComplete={markComplete}
          handleEdit={handleEdit}
        />
      ))}

      {tasks.length >1  && (
        <div className="mb-4 flex justify-center items-center mt-4 ">
          <label className="font-bold text-teal-600">
            Select the sorting order:
          </label>
          <select
            className="flex-1 border p-2 rounded-lg font-extrabold text-stone-600 ml-4"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option className="font-extrabold text-stone-600" value="default">
              Default
            </option>
            <option className="font-extrabold text-stone-600" value="date">
              Date
            </option>
            <option className="font-extrabold text-stone-600" value="completed">
              Completed Status
            </option>
          </select>
        </div>
      )}
      
    </div>
  );
}

export default TaskList;
