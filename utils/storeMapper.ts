import { ComponentType } from 'react';
import { connect } from 'react-redux';

export const storeMapper = (stateToProps: Function, dispatchToProps: Function) => (component: ComponentType<any>) => {
  // EX)
  // (storeStates) => ({ state: storeStates.targetObj.value })
  // {
  //   isOpen: state.modal.isOpen,
  //   modalComponent: state.modal.modalComponent,
  // }
  const mapStateToProps = (state: any) => (stateToProps(state));
  
  // EX)
  // dispatch = (storeArguments) => ({ newActionFunction: curActionFunction(arg) })
  // (dispatch: Function) => ({
  //   modalOnOff: (isOpen: boolean) => dispatch(modalOnOff(isOpen)),
  //   setModal: (content: string, category?: string) => dispatch(setModal(<SubmitModal content={content} category={category} closeModal={() => dispatch(modalOnOff(false))} />)),
  // }));
  const mapDispatchToProps = (dispatch: (arg0: any) => any) => (dispatchToProps(dispatch));

  return connect(mapStateToProps, mapDispatchToProps)(component)
}
