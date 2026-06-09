import TaskItem from "./TaskItem"
function TaskList({ tasks, onToggle, onDelete }) {
  return (
    <>
      {tasks.map(task => <TaskItem key={task.id} task={task} onToggle={onToggle} 
      onDelete={onDelete} />)}
    </>
  )
}
export default TaskList