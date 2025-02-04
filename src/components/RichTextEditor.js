import React, { useState } from "react";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import './RichTextEditor.css';  // Import the CSS file

const RichTextEditor = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  return (
    <div className="rich-text-editor-container">
      <Editor 
        editorState={editorState} 
        onEditorStateChange={setEditorState} 
      />
    </div>
  );
};

export default RichTextEditor;
