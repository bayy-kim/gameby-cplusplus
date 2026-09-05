"use client";

import React from "react";
import Editor from "@monaco-editor/react";

interface CodeEditorProps {
  value: string;
  onChange: (value: string) => void;
  language?: string;
  readOnly?: boolean;
}

export default function CodeEditor({
  value,
  onChange,
  language = "cpp",
  readOnly = false,
}: CodeEditorProps) {
  const handleEditorChange = (newValue?: string) => {
    onChange(newValue || "");
  };

  return (
    <div className="w-full h-full min-h-[350px] overflow-hidden bg-[#1e1e1e]">
      <Editor
        height="100%"
        defaultLanguage={language}
        language={language}
        theme="vs-dark"
        value={value}
        onChange={handleEditorChange}
        options={{
          fontSize: 14,
          fontFamily: "'JetBrains Mono', 'Fira Code', 'Cascadia Code', Consolas, monospace",
          minimap: { enabled: false },
          scrollBeyondLastLine: false,
          automaticLayout: true,
          readOnly: readOnly,
          lineNumbers: "on",
          roundedSelection: true,
          tabSize: 4,
          padding: { top: 16, bottom: 16 },
          suggestOnTriggerCharacters: true,
          quickSuggestions: true,
          wordWrap: "on",
          scrollbar: {
            vertical: "auto",
            horizontal: "auto",
          },
        }}
        loading={
          <div className="flex items-center justify-center h-full text-zinc-500 font-mono text-xs uppercase tracking-widest gap-3">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
            Initializing Editor...
          </div>
        }
      />
    </div>
  );
}
