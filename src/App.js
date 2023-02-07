import './App.css'
import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import Form from './components/Form';
import uuid from 'react-uuid';

function App() {

  //initial array of hard coded data objects
  const [task, setTask] = useState([
    {
      id: uuid(),
      description: "Wash the dishes",
      status: false,
      dueDate: '02/18/2023',
      priority: 'Low'
    },
    {
      id: uuid(),
      description: "Cook dinner",
      status: false,
      dueDate: '02/19/2023',
      priority: 'Med'
    },
    {
      id: uuid(),
      description: "Finish JS4 lab2",
      status: false,
      dueDate: '02/20/2023',
      priority: 'High'
    },
  ])
  console.log(task)



  const handleAddTask = (description, status, dueDate, priority) => {
    const newTaskArray = [...task,
    {
      id: uuid(),
      description,
      status,
      dueDate,
      priority
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

      <div style={{ display: 'flex' }}>
        <div className='tasks-container'>
          <Tasks
            task={task}
            isComplete={handleChangeStatus}
            toDelete={handleDelete}
            toClearAll={handleClearTasks} />
        </div>
        <div>
          <Form
            onAddTask={handleAddTask}

          />
        </div>
      </div>


    </div>
  );
}
export default App;
