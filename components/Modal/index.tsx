import React from 'react';
import { connect } from 'react-redux';
import { modalOnOff } from '../../store/actions';
import styles from './Modal.module.scss';

const Modal = (props: any) => {
  return (
    <div className={styles.container}>
      {props.children}
    </div>
  )
}

const mapStateToProps = (state: { modal: { isOpen: boolean; }; }) => ({
  isOpen: state.modal.isOpen,
});

const mapDispatchToProps = (dispatch: (arg0: { type: string; isOpen: boolean; }) => any) => ({
  modalOnOff: (isOpen: boolean) => dispatch(modalOnOff(isOpen)),
});  

export default connect(mapStateToProps, mapDispatchToProps)(Modal);