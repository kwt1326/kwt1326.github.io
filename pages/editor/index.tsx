import React, { useRef } from 'react';
import dynamic from 'next/dynamic';
import styles from './editor.module.scss';
import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor as EditorType } from '@toast-ui/react-editor';
import { EditorForwardedProps, EditorPropsWithHandlers } from './editorWrapper';

const Editor = dynamic<EditorForwardedProps>(() => import('./editorWrapper'), { ssr: false });
const EditorComponent = React.forwardRef<EditorType | undefined, EditorPropsWithHandlers>((props: EditorForwardedProps, ref) => {
  return <Editor {...props} forwardRef={ref as React.MutableRefObject<EditorType>} />
})

interface Props extends EditorType {
  onChange(value: string): void;
  valueType?: "markdown" | "html";
}

const EditorPage: React.FC<Props> = (props: any) => {
  const editorRef = useRef<EditorType>();
  
  return (
    <div className={styles.container}>
      <EditorComponent
        ref={editorRef as React.MutableRefObject<EditorType>}
        initialValue="hello react editor world!"
        previewStyle="vertical"
        height="calc(100vh - 20px)"
        initialEditType="markdown"
        useCommandShortcut={true}
      />
    </div>
  )
}

export default EditorPage;