import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import { v4 as uuidv4 } from 'uuid';
import './App.css'; 

const App = () => {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem('tasks');
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
    },
    enableReinitialize: true,
    onSubmit: (values, { resetForm }) => {
      if (editingTask) {
        setTasks(tasks.map(task => 
          task.id === editingTask.id ? { ...task, ...values } : task
        ));
        setEditingTask(null);
      } else {
        const newTask = {
          id: uuidv4(),
          title: values.title,
          description: values.description,
          completed: false,
        };
        setTasks([...tasks, newTask]);
      }
      resetForm();
    },
  });

  const toggleComplete = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const editTask = (task) => {
    setEditingTask(task);
    formik.setValues({ title: task.title, description: task.description });
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Task Manager</h1>
      <form
  onSubmit={formik.handleSubmit}
  className={`space-y-2 ${editingTask ? 'edit-mode' : ''}`}
>

        <input
          name="title"
          onChange={formik.handleChange}
          value={formik.values.title}
          placeholder="Title"
          className="border p-2 w-full"
        />
        <textarea
          name="description"
          onChange={formik.handleChange}
          value={formik.values.description}
          placeholder="Description"
          className="border p-2 w-full"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          {editingTask ? 'Update Task' : 'Add Task'}
        </button>
      </form>

      <ul className="mt-6 space-y-4">
        {tasks.map(task => (
          <li key={task.id} className={`p-4 border rounded ${task.completed ? 'bg-green-100 line-through' : ''}`}>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold">{task.title}</h3>
                <p>{task.description}</p>
              </div>
              <div className="flex flex-col items-end space-y-2">
                <input type="checkbox" checked={task.completed} onChange={() => toggleComplete(task.id)} />
                <button onClick={() => editTask(task)} className="text-blue-500 text-sm">Edit</button>
                <button onClick={() => deleteTask(task.id)} className="text-red-500 text-sm">Delete</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
