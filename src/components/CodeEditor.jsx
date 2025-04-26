import React, { useState, useEffect, useRef } from "react";
import "./CodeEditor.scss";

const CodeEditor = () => {
  const [code, setCode] = useState("");
  const [lines, setLines] = useState(["1"]);
  const textAreaRef = useRef(null);

  useEffect(() => {
    // محاسبه خطوط براساس ارتفاع واقعی
    const textArea = textAreaRef.current;
    if (textArea) {
      const lineHeight =
        parseInt(window.getComputedStyle(textArea).lineHeight, 10) || 20;
      const totalLines = Math.ceil(textArea.scrollHeight / lineHeight);
      setLines(Array.from({ length: totalLines }, (_, index) => index + 1));
    }
  }, [code]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const cursorPosition = e.target.selectionStart;
      const value = e.target.value;
      const newValue =
        value.substring(0, cursorPosition) +
        "\n" +
        value.substring(cursorPosition);
      setCode(newValue.replace(/\t/g, ""));
    }
  };

  return (
    <div className="code-editor">
      <div className="line-numbers">
        {lines.map((line) => (
          <div key={line} className="line-number">
            {line}
          </div>
        ))}
      </div>
      <textarea
        ref={textAreaRef}
        className="editor"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={`const Mobina = () => {

  pronouns: 'she' | 'her',

  basedIn: 'Tehran, Iran',

  education: 'Computer Engineering graduate from Damghan University',

  askMeAbout: ['web dev', 'tech', 'Js and its frameworks', 'Databases'],

  currentFocus: 'My Focus point is to develop React at this time'
  };
      
  return (<a onClick={Mobina}> About Me</a>);
      
export default Mobina;`}
      ></textarea>
    </div>
  );
};

export default CodeEditor;
