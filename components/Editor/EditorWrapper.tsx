import React from "react";
import { Editor, EditorProps } from "@toast-ui/react-editor";

export interface EditorForwardedProps extends EditorProps {
   forwardRef?: React.MutableRefObject<Editor>;
}

export interface EditorPropsWithHandlers extends EditorProps {
  onChange?(value: string): void;
}

const EditorWrapper = (props: EditorForwardedProps) => (
  <Editor {...props} ref={props.forwardRef} />
); 

export default EditorWrapper;