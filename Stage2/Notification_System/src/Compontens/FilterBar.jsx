function FilterBar({ category, onChangeCategory }) {
  return (
    <div className="filter-bar">
      <label>
        Category:
        <select value={category} onChange={(event) => onChangeCategory(event.target.value)}>
          <option value="all">All</option>
          <option value="placement">Placement</option>
          <option value="result">Result</option>
          <option value="event">Event</option>
        </select>
      </label>
    </div>
  );
}

export default FilterBar;
