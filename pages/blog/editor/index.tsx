import React, { useCallback, useEffect, useState } from 'react';
import { withRouter, NextRouter } from 'next/router';
import axios from 'axios';
import Editor from '../../../components/Editor';
import styles from "./Editor.module.scss";

interface PropsType {
  valueType?: "markdown" | "html";
  router: NextRouter;
}

const EditorPage = ({ router, valueType }: PropsType) => {
  const [filename, setFilename] = useState('default');
  const [content, setContent] = useState('');
  
  const download = useCallback(async () => {
    axios({
      method: 'POST',
      url: '/api/post',
      data: { text: content, filename }
    }).then(() => {
      setFilename('');
    }).catch((e) => console.log(e))
  }, [filename, content])

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
      <Editor onChange={(value) => setContent(value)} valueType={valueType} initialValue={content} />
    </div>
  )
}

export default withRouter(EditorPage);