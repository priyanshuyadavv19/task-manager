function TaskItem({ task, onToggle, onDelete }) {
  return (
    <div className="flex items-center rounded-lg gap-4 hover:bg-gray-700 bg-gray-800 px-4 py-2">
      <input className="w-5 h-5 cursor-pointer shrink-0"
      type="checkbox" checked={task.completed} onChange={() => onToggle(task.id)} />
      <span className={`flex-1 break-words ${task.completed ? "line-through text-gray-500" : 
        "text-gray-300"}`}>{task.text}</span>
      <button className="bg-red-600 hover:bg-red-800 text-white rounded-lg px-3 py-1 cursor-pointer shrink-0" onClick={() => onDelete(task.id)} >Delete</button>
    </div>
  )
}
export default TaskItem