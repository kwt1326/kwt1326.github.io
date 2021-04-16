import React, { useCallback, useEffect } from 'react';
import { withRouter, NextRouter } from 'next/router';
import axios from 'axios';
import styles from './Editor.module.scss';

type SubmitModalType = {
  content: string
  router: NextRouter
  closeModal(): Function
}

const SubmitModal = (props: SubmitModalType) => {
  console.log(props)
  let title = '';

  const download = useCallback(async () => {
    axios({
      method: 'POST',
      url: '/api/post',
      data: { filename: title, text: props.content }
    }).then(() => {
      alert('게시되었습니다.');
    }).catch((e: unknown) => console.log(e))
  }, [title, props])

  return (
    <div className={styles.submit_modal_container}>
      <div className={styles.input_wrap}>
        <p>문서의 제목을 입력해주세요.</p>
        <input onChange={(e) => title = e.target.value} />
      </div>
      <div className={styles.btn_wrap}>
        <button onClick={props.closeModal}>취소</button>
        <button onClick={download}>저장</button>
      </div>
    </div>
  )
}

export default withRouter(SubmitModal);