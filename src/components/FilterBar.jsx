function FilterBar({ currentFilter, onFilterChange }) {
  return (
    <div className="flex justify-center gap-8 mb-6">
      <button className={`rounded-lg px-4 py-2 cursor-pointer ${currentFilter === "all" ?
        "bg-blue-600 text-white" : "bg-gray-800 text-gray-400 hover:bg-gray-700"}`}
      onClick={() => onFilterChange("all")} >All</button>
      <button className={`rounded-lg px-4 py-2 cursor-pointer ${currentFilter === "active" ?
        "bg-blue-600 text-white" : "bg-gray-800 text-gray-400 hover:bg-gray-700"}`}
      onClick={() => onFilterChange("active")} >Active</button>
      <button className={`rounded-lg px-4 py-2 cursor-pointer ${currentFilter === "completed" ?
        "bg-blue-600 text-white" : "bg-gray-800 text-gray-400 hover:bg-gray-700"}`}
      onClick={() => onFilterChange("completed")} >Completed</button>
    </div>
  )
}
export default FilterBar