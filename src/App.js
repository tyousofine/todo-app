import './App.scss'
import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import Form from './components/Form';
import Footer from './components/Footer'
import uuid from 'react-uuid';

function App() {

  //initial array of hard coded data objects - test data
  const [task, setTask] = useState([
    {
      id: uuid(),
      description: "Wash the dishes",
      status: false,
      priority: 'green'
    },
    {
      id: uuid(),
      description: "Cook dinner",
      status: false,
      priority: 'yellow'
    },
    {
      id: uuid(),
      description: "Finish JS4 lab2",
      status: false,
      priority: 'red'
    },
  ])

  // add task handler
  const handleAddTask = (description, status, priority) => {
    console.log(priority)
    const newTaskArray = [...task,
    {
      id: uuid(),
      description,
      status,
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

  // clear all tasks hanlder
  const handleClearTasks = () => {
    setTask([])
    console.log(task)
  }

  return (
    <div className='app'>
      <Header />
      <div className='main-page-container'>
        <div className='tasks-section'>
          <Tasks
            task={task}
            isComplete={handleChangeStatus}
            toDelete={handleDelete}
            toClearAll={handleClearTasks} />
        </div>
        <div className='form-section'>
          <Form
            onAddTask={handleAddTask}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default App;
