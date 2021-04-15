import React, { useCallback, useEffect, useState } from 'react';
import { withRouter, NextRouter } from 'next/router';
import { connect } from 'react-redux';
import axios from 'axios';
import { modalOnOff } from '../../../store/actions';
import Editor from '../../../components/Editor';
import styles from "./Editor.module.scss";

interface PropsType {
  valueType?: "markdown" | "html";
  router: NextRouter;
  modalOnOff: Function;
  isOpen: boolean;
}

const EditorPage = ({ router, valueType, modalOnOff, isOpen }: PropsType) => {
  const [filename, setFilename] = useState('default');
  const [content, setContent] = useState('');
  let contentText = '';
  
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
        <input type="text" value={filename} onChange={(e) => { setContent(contentText); setFilename(e.target.value) }} />
        <button onClick={() => { setContent(contentText); modalOnOff(!isOpen) }}>게시하기</button>
      </div>
      <Editor
        onChange={(value) => contentText = value}
        valueType={valueType}
        initialValue={content}
      />
    </div>
  )
}

const mapStateToProps = (state: { modal: { isOpen: boolean; }; }) => ({
  isOpen: state.modal.isOpen,
});
  
const mapDispatchToProps = (dispatch: (arg0: { type: string; isOpen: boolean; }) => any) => ({
  modalOnOff: (isOpen: boolean) => dispatch(modalOnOff(isOpen)),
});  

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(EditorPage));