
import { useState } from "react";
import AddTask from "./Components/AddTask";
import Tasks from "./Components/Tasks";
import Header from "./Components/Header";

function App() {
  const [tasks, setTasks] = useState([
    {
      id:1,
      text: 'task 1',
      day: 'friday',
      reminder: true,
    },
    {
      id:2,
      text: 'task 3',
      day: 'saturday',
      reminder: false,
    },
    {
      id:3,
      text: 'task 3',
      day: 'sunday',
      reminder: true,
    },
  ])
  const [showAddTask,setShowAddTask] = useState(true);

  //Add Task
  const addTask = (task) => { 
    console.log(task) 
  }

  //Delete Task
  const deleteTask = (id) => { 
    setTasks(tasks.filter( task=> task.id !== id))
  }

  //Toggle Reminder
  const toggleReminder = (id) => { 
    setTasks(tasks.map( (task) =>  task.id === id ? {...task, reminder: !task.reminder} :task  ))
  }

//  const addTask = () => { setShowAddTask(!showAddTask)  }

  return (
    <div className='container'>
    <Header title='Task Tracker App' onAdd={ () => { setShowAddTask(!showAddTask)  } }/>
    {showAddTask  && <AddTask onAddTask = {addTask}/>}
    { tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />: 'No task present'}
    
    </div>
    
  );
}

export default App;
