/* eslint-disable react/prop-types */
import { useState } from "react";

function TaskForm({addTask}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("personal");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = (e) => {
   e.preventDefault();
   const newTask = {
    id: Date.now(),
    title,
    description,
    category,
    dueDate,
    completed: false,
   };

   if(title && description && dueDate) {
    addTask(newTask);
    setTitle("");
    setDescription("");
    setCategory("personal");
    setDueDate("");
    return;
   }

   alert("Please fill in all fields");
  }
  return (
    <form className="w-full max-w-lg p-4 bg-white rounded-lg border-2 border-teal-500 mt-1 flex flex-col items-center" action="submit" onSubmit={handleSubmit}>
      <div className="mb-4 flex justify-center items-center w-full">
        <label className=" font-bold text-teal-600">Title:</label>
        <input
          type="text"
          className="flex-1 border p-2 rounded-lg ml-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter task title.."
        />
      </div>

      <div className="mb-4 flex justify-center items-center w-full">
        <label className=" font-bold text-teal-600">Description:</label>
        <input
          type="text"
          className="flex-1 border p-2 rounded-lg ml-2"
          placeholder="Enter task description.."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div className="mb-4 flex justify-center items-center w-full">
        <label className=" font-bold text-teal-600">Category:</label>
        <select
          className="flex-1 border p-2 rounded-lg ml-2  font-extrabold text-stone-600"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option className=" font-extrabold text-stone-600" value="personal">Personal</option>
          <option className=" font-extrabold text-stone-600" value="work">Work</option>
          <option className=" font-extrabold text-stone-600" value="urgent">Urgent</option>
        </select>
      </div>

      <div className="mb-4 flex justify-center items-center w-full">
        <label className=" font-bold text-teal-600">Due Date:</label>
        <input
          type="date"
          className="flex-1 border p-2 rounded-lg ml-2"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
      </div>


      <button
        className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded text-center my-4 "
  
      >
       Submit
      </button>
    </form>
  );
}

export default TaskForm;
