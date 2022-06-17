import { useState } from 'react'

import './App.css'
import TaskCreator from './components/TaskCreator'

function App() {
  const [taskItem, setTaskItem] = useState([
    { name: 'primer tarea', done: false },
    { name: 'segunda tarea', done: false },
    { name: 'tercera tarea', done: false },
  ])

  function createNewTask(taskName) {
    if (!taskItem.find((task) => task.name === taskName)) {
      setTaskItem([...taskItem, { name: taskName, done: false }])
    }
  }

  return (
    <div className='App'>
      <TaskCreator createNewTask={createNewTask} />

      <table>
        <thead>
          <tr>
            <th>Task</th>
          </tr>
        </thead>
        <tbody>
          {taskItem.map((task) => (
            <tr key={task.name}>
              <td>
                <tr>{task.name}</tr>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App
