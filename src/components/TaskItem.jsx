function TaskItem({ task, onToggle, onDelete }) {
  return (
    <>
      <input type="checkbox" checked={task.completed} onChange={() => onToggle(task.id)} />
      <span>{task.text}</span>
      <button onClick={() => onDelete(task.id)} >Delete</button>
    </>
  )
}
export default TaskItem