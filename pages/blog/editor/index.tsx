import React, { useState, useEffect } from 'react';
import { withRouter, NextRouter } from 'next/router';
import { connect } from 'react-redux';
import { modalOnOff, setModal } from '../../../store/actions';
import Editor from '../../../components/Editor';
import SubmitModal from './SubmitModal';
import styles from "./Editor.module.scss";

interface PropsType {
  valueType?: "markdown" | "html";
  initialContent?: string;
  title?: string;
  category?: string;
  router: NextRouter;
  // store
  modalOnOff: Function;
  setModal: Function;
}

const EditorPage = ({
  router, initialContent, valueType, modalOnOff, setModal,
  title, category
}: PropsType) => {
  const [content, setContent] = useState('');
  const [didmount, setDidmount] = useState(false);
  let contentText = '';
  
  useEffect(() => {
    if (process.env.NODE_ENV !== 'development') {
      router.push('/');
    } else {
      if (!didmount) {
        setDidmount(true);
        initialContent && setContent(initialContent);
      }
    }
  })

  return (
    <div className={styles.container}>
      <div className={styles.header_wrapper}>
        <button
          onClick={async () => {
            setContent(contentText);
            setModal({ content: contentText, title, category });
            modalOnOff(true);
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
  setModal: (data: {
    content: string;
    title?: string;
    category?: string;
  }) => dispatch(setModal(<SubmitModal data={data} closeModal={() => dispatch(modalOnOff(false))} />)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(EditorPage));