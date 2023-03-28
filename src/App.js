import './App.scss'
import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer'
import AddTaskPage from './pages/AddTaskPage';
import TasksPage from './pages/TasksPage';
import HelpPage from './pages/HelpPage';
import NotFoundPage from './pages/NotFoundPage';
import HowToAddTaskPage from './pages/HelpPage/HowToAdd';
import HowToDeleteTaskPage from './pages/HelpPage/HowToDelete';
import PriorityGuidePage from './pages/HelpPage/PriorityGuide';
import Loading from './components/Loading';
import { loadFromDB } from './database/read';
import { useDispatch } from 'react-redux';
import { setTasks } from './redux/tasksSlice';


function App() {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const data = await loadFromDB()
      dispatch(setTasks(data))
      setIsLoading(false);
    })()
  })

  return (
    <>
      <Header />

      {isLoading ? (
        <Loading />
      ) : (
        <Routes>
          <Route path='/' element={<TasksPage />}></Route>
          <Route path='/add' element={<AddTaskPage />}></Route>

          <Route path='/help' element={<HelpPage />}>
            <Route path='HowToAdd' element={<HowToAddTaskPage />}></Route>
            <Route path='HowToDelete' element={<HowToDeleteTaskPage />}></Route>
            <Route path='priorityGuide' element={<PriorityGuidePage />}></Route>
          </Route>

          <Route path='*' element={<NotFoundPage />}></Route>
        </Routes>

      )}

      <Footer />
    </>
  );
}
export default App;
