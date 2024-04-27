import { useEffect } from "react";
import hljs from "highlight.js";

// THIS IS VERY IMPORTANT.
// In Next.js, put this in your _app.js file
import "highlight.js/styles/github.css";

interface HighlighterProps {
  codeSnippet: string;
}

function Highlighter({
  codeSnippet
}: HighlighterProps): JSX.Element {
  useEffect(() => {
    hljs.highlightAll();
  });

  return (
    <pre className="hljs">
      <code dangerouslySetInnerHTML={{ __html: codeSnippet }} />
    </pre>
  );
}

export default Highlighter;
