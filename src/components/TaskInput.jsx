import { useState } from "react"
function TaskInput({ onAddTask }) {
  const [text, setText] = useState("")
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
    <>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} 
      onKeyDown={handleKeyDown}/>
      <button onClick={handleClick}>Add</button>
    </>
  )
}
export default TaskInput