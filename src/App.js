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



  return (
    <div className='content'>
      <Header />
      <Tasks
        task={task} />
      <Form
        onAddTask={handleAddTask} />
    </div>
  );
}
export default App;
