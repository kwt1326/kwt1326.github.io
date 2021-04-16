import React, { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import { Editor as EditorType, EditorProps } from '@toast-ui/react-editor';
import { EditorForwardedProps, EditorPropsWithHandlers } from './EditorWrapper';

interface PropsType extends EditorProps {
  initialValue?: string;
  valueType?: "markdown" | "html";
  onChange?(value: string): void;
}

const EditorPage: React.FC<PropsType> = (props) => {
  const editorRef = useRef<EditorType>();
  const Editor = dynamic<EditorForwardedProps>(() => import('./EditorWrapper'), { ssr: false });
  const EditorComponent = React.forwardRef<EditorType | undefined, EditorPropsWithHandlers>((props, ref) => {
    return <Editor {...props} forwardRef={ref as React.MutableRefObject<EditorType>} />
  })

  const handleChange = React.useCallback(() => {
    if (props?.onChange) {
      if (!editorRef.current) return;
  
      const instance = editorRef.current.getInstance();
      const valueType = props.valueType || "markdown";
  
      props.onChange(valueType === "markdown" ? instance.getMarkdown() : instance.getHtml());
    }
  }, [props, editorRef]);

  return (
    <EditorComponent
      ref={editorRef}
      onChange={handleChange}
      initialValue={props.initialValue || "hello react editor world!"}
      previewStyle="vertical"
      height="calc(100vh - 20px)"
      initialEditType="markdown"
      useCommandShortcut={true}
    />
  )
}

export default EditorPage;