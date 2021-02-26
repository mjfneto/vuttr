import { useState, useEffect } from "react";

import { getTools } from "../../services/api";

import SearchBar from "../SearchBar/SearchBar";
import ToolsList from "../ToolsList/ToolsList";

function App() {
  let [tools, setTools] = useState([]);
  let [query, setQuery] = useState("");
  let [tagsOnly, setTagsOnly] = useState(false);

  useEffect(() => {
    try {
      getTools({ query, tagsOnly }).then((data) => setTools(data));
    } catch (err) {
      console.log(err);
    }
  }, [query, tagsOnly]);

  function handleToolsQuery(e) {
    e.preventDefault();
    const [queryInput, tagsCheckbox] = e.target;
    const { value } = queryInput;
    const { checked } = tagsCheckbox;
    setQuery(value.trim());
    setTagsOnly(checked);
  }

  return (
    <div className="App">
      <div className="container">
        <header className="header">
          <h1 className="header__title">VUTTR</h1>
          <p className="header__subtitle">Very Useful Tools to Remember</p>
          <SearchBar onToolsQuery={handleToolsQuery} />
          <button className="btn--add">Add</button>
        </header>
        <main>
          <ToolsList tools={tools} />
        </main>
      </div>
    </div>
  );
}

export default App;
