import React, { useCallback, useEffect } from 'react';
import { withRouter, NextRouter } from 'next/router';
import axios from 'axios';
import styles from './Editor.module.scss';
import dayjs from 'dayjs';

type SubmitModalType = {
  data: {
    content: string;
    title?: string;
    category?: string;
  };
  router: NextRouter;
  closeModal(): Function;
}

const SubmitModal = (props: SubmitModalType) => {
  let title = props.data?.title || '';
  let category = props.data?.category || '';

  const download = useCallback(async () => {
    if (!title) {
      return alert('제목은 필수입력 사항 입니다.');
    }
    axios({
      method: 'POST',
      url: '/api/post',
      data: {
        filename: title.replaceAll(' ', '-'),
        text: props.data.content,
        title,
        category,
      }
    }).then(() => {
      alert('게시되었습니다.');
    }).catch((e: unknown) => console.log(e))
  }, [title, props])

  return (
    <div className={styles.submit_modal_container}>
      <div className={styles.input_wrap}>
        <p>문서의 제목을 입력해주세요.</p>
        <input onChange={(e) => title = e.target.value} defaultValue={title} />
        <p style={{ marginTop: 15 }}>문서 카테고리를 입력해주세요.</p>
        <input onChange={(e) => category = e.target.value} defaultValue={category} />
      </div>
      <div className={styles.btn_wrap}>
        <button onClick={props.closeModal}>취소</button>
        <button onClick={download}>저장</button>
      </div>
    </div>
  )
}

export default withRouter(SubmitModal);