function SearchBar({ onToolsQuery }) {
  return (
    <form onSubmit={onToolsQuery} className="search">
      <input type="text" placeholder="search" />
      <label htmlFor="tags-only">
        <input type="checkbox" id="tags-only" />
        search in tags only
      </label>
    </form>
  );
}

export default SearchBar;
