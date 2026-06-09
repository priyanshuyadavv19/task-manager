function FilterBar({ currentFilter, onFilterChange }) {
  return (
    <>
      <button onClick={() => onFilterChange("all")} >All</button>
      <button onClick={() => onFilterChange("active")} >Active</button>
      <button onClick={() => onFilterChange("completed")} >Completed</button>
    </>
  )
}
export default FilterBar