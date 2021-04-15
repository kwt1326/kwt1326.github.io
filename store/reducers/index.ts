import { MODALONOFF } from '../actions';
import { combineReducers } from 'redux';

const modalInitialState = {
    isOpen: false,
};

const modal = (state = modalInitialState, action: any) => {
    switch(action.type) {
        case MODALONOFF:
            return {
                ...state,
                isOpen: action.isOpen,
            }
        default:
            return state;
    }
};

const modalApp = combineReducers({
    modal
});

export default modalApp;