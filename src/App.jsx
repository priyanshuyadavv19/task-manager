import { useState, useEffect } from "react"
import TaskInput from "./components/TaskInput"
import FilterBar from "./components/FilterBar"
import TaskList from "./components/TaskList"
function App() {
  const [tasks, setTasks] = useState(() => {
    const stored = localStorage.getItem("tasks")
    return stored ? JSON.parse(stored) : []
  })
  const [filter, setFilter] = useState("all")
  function addTask(text) {
    const newTask = {id: crypto.randomUUID(), text: text, completed: false}
    setTasks([...tasks, newTask])
  }
  function deleteTask(id) {
    setTasks(tasks.filter(task => task.id !== id))
  }
  function toggleTask(id) {
    setTasks(tasks.map(task => task.id === id ? {...task, completed: !task.completed} : task))
  }
  const filteredTasks = tasks.filter((task) => {
    if (filter === "all") {
      return true
    } else if (filter === "active") {
      return !task.completed
    } else if (filter === "completed") {
      return task.completed
    }
  })
  useEffect(() => {
    localStorage.setItem("tasks",JSON.stringify(tasks))
  },[tasks])
  return (
    <>
      <TaskInput onAddTask={addTask}/>
      <FilterBar currentFilter={filter} onFilterChange={setFilter}/>
      <TaskList tasks={filteredTasks} onToggle={toggleTask} onDelete={deleteTask}/>
    </>
  )
}
export default App
