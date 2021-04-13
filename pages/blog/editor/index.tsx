import React, { useCallback, useEffect, useRef, useState } from 'react';
import { withRouter, NextRouter } from 'next/router';
import dynamic from 'next/dynamic';
import axios from 'axios';
import { Editor as EditorType } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import { EditorForwardedProps, EditorPropsWithHandlers } from './editorWrapper';
import 'codemirror/lib/codemirror.css';
import styles from "./editor.module.scss";

const Editor = dynamic<EditorForwardedProps>(() => import('./editorWrapper'), { ssr: false });
const EditorComponent = React.forwardRef<EditorType | undefined, EditorPropsWithHandlers>((props: EditorForwardedProps, ref) => {
  return <Editor {...props} forwardRef={ref as React.MutableRefObject<EditorType>} />
})

interface PropsType extends EditorType {
  // onChange(value: string): void;
  valueType?: "markdown" | "html";
  router: NextRouter;
}

const EditorPage = ({ valueType, router }: PropsType) => {
  const editorRef = useRef<EditorType>();
  const [filename, setFilename] = useState('default');
  
  const download = useCallback(async () => {
    if (document && editorRef.current) {
      const instance = editorRef.current.getInstance();
      const data = (valueType || 'markdown') === "markdown" ? instance.getMarkdown() : instance.getHtml();

      axios({
        method: 'POST',
        url: '/api/save',
        data: { text: data, filename }
      }).then(() => {
        setFilename('');
      }).catch((e) => console.log(e))
    }
  }, [editorRef])

  useEffect(() => {
    if (process.env.NODE_ENV !== 'development') {
      router.push('/');
    }
  })

  return (
    <div className={styles.container}>
      <div className={styles.header_wrapper}>
        <input type="text" value={filename} onChange={e => setFilename(e.target.value)} />
        <button onClick={download}>게시하기</button>
      </div>
      <EditorComponent
        ref={editorRef}
        initialValue="hello react editor world!"
        previewStyle="vertical"
        height="calc(100vh - 20px)"
        initialEditType="markdown"
        useCommandShortcut={true}
      />
    </div>
  )
}

export default withRouter(EditorPage);