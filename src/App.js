import './App.css'
import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import Form from './components/Form';
import uuid from 'react-uuid';

function App() {
  const [task, setTask] = useState([]);


  const handleAddTask = (description, status) => {
    const newTaskArray = [...task,
    {
      id: uuid(),
      description,
      status
    }]
    setTask(newTaskArray)
  }

  //  Change task status handler
  const handleChangeStatus = (id) => {
    const updatedStatus = [...task];
    updatedStatus.forEach((task) => {
      if (task.id === id) {
        task.status = !task.status
      }
      setTask(updatedStatus);
    })
  }

  // Delete task handler
  const handleDelete = (id) => {
    task.forEach((item) => {
      if (item.id === id) {
        setTask(task.filter((matched) => {
          return id !== matched.id
        }))
      }
    })
  }

  // function to clear all tasks
  const handleClearTasks = () => {
    setTask([])
    console.log(task)
  }


  return (
    <div className='content'>
      <Header />

      <Tasks
        task={task}
        isComplete={handleChangeStatus}
        toDelete={handleDelete} />
      <Form
        onAddTask={handleAddTask}
        onClearAllTasks={handleClearTasks} />

      {task.length > 0 &&
        <button onClick={handleClearTasks}>Clear Tasks</button>
      }
    </div>
  );
}
export default App;
