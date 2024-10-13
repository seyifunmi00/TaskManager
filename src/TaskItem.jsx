/* eslint-disable react/prop-types */
import { useState } from "react";

function TaskItem({ task, deleteTask, markComplete, handleEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedtitle, setEditedtitle] = useState("");
  const [editedDescription, setEditedDescription] = useState("");
  const [editedDueDate, setEditedDueDate] = useState("");
  const [editedCategory, setEditedCategory] = useState("personal");

  const handleSubmit = (e) => {
    e.preventDefault();

    if(editedtitle && editedDescription && editedDueDate) {
     handleEdit(task.id, editedtitle, editedDescription, editedCategory, editedDueDate);
    
    }

    setIsEditing(false);
  };

 

  return isEditing ? (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="title">
          Title
        </label>
        <input
          type="text"
          name="title"
          value={editedtitle}
          onChange={(e) => setEditedtitle(e.target.value)}
          className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
          required
        />
      </div>

      <div className="mb-4">
        <label
          className="block text-gray-700 font-bold mb-2"
          htmlFor="description"
        >
          Description
        </label>
        <textarea
          name="description"
          value={editedDescription}
          onChange={(e) => setEditedDescription(e.target.value)}
          className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
          rows="3"
          required
        ></textarea>
      </div>

      <div className="mb-4 flex justify-center items-center w-full">
        <label className=" text-gray-700 font-bold mb-2">Category:</label>
        <select
          className="flex-1 border p-2 rounded-lg ml-2  font-extrabold text-stone-600"
          value={editedCategory}
          onChange={(e) => setEditedCategory(e.target.value)}
        >
          <option className=" font-extrabold text-stone-600" value="personal">
            Personal
          </option>
          <option className=" font-extrabold text-stone-600" value="work">
            Work
          </option>
          <option className=" font-extrabold text-stone-600" value="urgent">
            Urgent
          </option>
        </select>
      </div>

      <div className="mb-4 flex justify-center items-center w-full">
        <label className=" text-gray-700 font-bold mb-2" htmlFor="dueDate">
          Due Date:
        </label>
        <input
          type="date"
          name="dueDate"
          value={editedDueDate}
          onChange={(e) => setEditedDueDate(e.target.value)}
          className="flex-1 px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500 ml-2"
          required
        />
      </div>

      <div className="flex justify-end space-x-4">
        <button
          type="button"
          onClick={() => setIsEditing(false)}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded"
        >
          Save
        </button>
      </div>
    </form>
  ) : (
    <li
      className={`task-item p-4 border rounded-lg ${
        task.completed && "bg-red-200"
      }`}
    >
      <h3 className="font-extrabold text-2xl text-teal-400">{task.title}</h3>
      <p className="text-sm text-stone-600 font-bold">{task.description}</p>
      <p className="text-sm text-stone-600 font-bold">Due: {task.dueDate}</p>
      <button
        className="ml-4 bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded mb-2"
        onClick={() => markComplete(task.id)}
      >
        Mark as complete
      </button>
      <button
        className="ml-4 bg-stone-500 hover:bg-stone-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setIsEditing(true)}
      >
        Update
      </button>
      <button
        className="ml-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => deleteTask(task.id)}
      >
        Delete
      </button>
    </li>
  );
}

export default TaskItem;
