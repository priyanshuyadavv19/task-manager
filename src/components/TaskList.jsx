import TaskItem from "./TaskItem"
function TaskList({ tasks, onToggle, onDelete }) {
  if (tasks.length === 0) {
    return <p className="text-gray-400 text-center">No tasks here!</p>
  } else {
    return (
      <div className="flex flex-col gap-3">
        {tasks.map(task => <TaskItem key={task.id} task={task} onToggle={onToggle} 
        onDelete={onDelete} />)}
      </div>
    )
  }
}
export default TaskList