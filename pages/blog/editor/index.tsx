import React, { useState, useEffect } from 'react';
import { withRouter, NextRouter } from 'next/router';
import { connect } from 'react-redux';
import { modalOnOff, setModal } from '../../../store/actions';
import Editor from '../../../components/Editor';
import SubmitModal from './SubmitModal';
import styles from "./Editor.module.scss";

interface PropsType {
  valueType?: "markdown" | "html";
  router: NextRouter;
  modalOnOff: Function;
  setModal: Function;
  isOpen: boolean;
}

const EditorPage = ({ router, valueType, modalOnOff, setModal, isOpen }: PropsType) => {
  const [content, setContent] = useState('');
  let contentText = '';
  
  useEffect(() => {
    if (process.env.NODE_ENV !== 'development') {
      router.push('/');
    }
  })

  return (
    <div className={styles.container}>
      <div className={styles.header_wrapper}>
        <button
          onClick={async () => {
            setModal(contentText, 'test')
            setContent(contentText)
            modalOnOff(true)
          }}
        >
          게시하기
        </button>
      </div>
      <Editor
        onChange={(value) => contentText = value}
        valueType={valueType}
        initialValue={content}
      />
    </div>
  )
}

const mapStateToProps = (state: { modal: { isOpen: boolean; modalComponent: any }; }) => ({
  isOpen: state.modal.isOpen,
  modalComponent: state.modal.modalComponent,
});

const mapDispatchToProps = (dispatch: (arg0: { type: string; isOpen?: boolean; modalComponent?: JSX.Element }) => any) => ({
  modalOnOff: (isOpen: boolean) => dispatch(modalOnOff(isOpen)),
  setModal: (content: string) => dispatch(setModal(<SubmitModal content={content} closeModal={() => dispatch(modalOnOff(false))} />)),
});  

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(EditorPage));