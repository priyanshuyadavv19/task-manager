import { useState, useEffect, useRef } from "react"
function TaskInput({ onAddTask }) {
  const [text, setText] = useState("")
  const inputElement = useRef(null)
  useEffect(() => {
    inputElement.current.focus()
  },[])
  function handleClick() {
    if (text === "") return
    onAddTask(text)
    setText("")
  }
  function handleKeyDown(evt) {
    if (evt.key === "Enter") {
      handleClick()
    }
  }
  return (
    <div className="flex gap-6 mb-4">
      <input className="flex-1 bg-gray-800 border border-gray-600 focus:outline-none
      focus:ring-2 focus:ring-blue-500 rounded-lg px-4 py-2 text-white placeholder-gray-400"
      type="text" value={text} onChange={(e) => setText(e.target.value)} 
      onKeyDown={handleKeyDown} ref={inputElement} placeholder="Enter task...."/>
      <button className="bg-blue-600 rounded-lg px-4 py-2 text-white hover:bg-blue-700 cursor-pointer" onClick={handleClick}>Add</button>
    </div>
  )
}
export default TaskInput