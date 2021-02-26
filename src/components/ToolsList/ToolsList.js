function ToolsList({ tools }) {
  return (
    <ul>
      {tools?.map(function (tool) {
        return (
          <li key={tool.id} className="tool">
            {tool.link ? (
              <a href={tool.link} target="_blank" rel="noopener noreferrer">
                <h2>{tool.title}</h2>
              </a>
            ) : (
              <h2>{tool.title}</h2>
            )}

            <p>{tool.description}</p>
            <ul>
              {tool.tags.map(function (tag) {
                return <li key={`tag-${tag}`}>{tag}</li>;
              })}
            </ul>
            <button>Remove</button>
          </li>
        );
      })}
    </ul>
  );
}

export default ToolsList;
