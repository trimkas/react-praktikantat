import './App.css';
import react, {useState} from 'react';
import Task from './Task';

function App() {

  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState([]);

  return (
    <div className="App">
      <label htmlFor="task_input">Add new task</label>
      <br />

      <input type="text" name="task_input" value={newTask} onChange={(e) => {
        setNewTask(e.target.value);
      }}/>

      <button onClick={() => {
        setTasks([...tasks, newTask]);
        setNewTask('');
      }}>Add task</button>

      <div className="task-holder">
        {tasks.map(task => {
          return <Task taskName={task} />
        })}
      </div>

    </div>
  );
}

export default App;
