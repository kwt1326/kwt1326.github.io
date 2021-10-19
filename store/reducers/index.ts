import {
    MODALONOFF, SETMODAL, MENUONOFF,
} from '../actions';
import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';

const modalInitialState = {
    isOpen: false,
    modalComponent: null,
};

const modal = (state = modalInitialState, action: {
    type: string;
    payload: any;
    isOpen?: boolean;
    modalComponent?: JSX.Element;
}) => {
    switch(action.type) {
        case MODALONOFF:
            return {
                ...state,
                isOpen: action.isOpen,
            }
        case SETMODAL:
            return {
                ...state,
                modalComponent: action.modalComponent,
            }
        case HYDRATE:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
};

const menu = (state = { isOpen: false }, action: {
    type: string;
    isOpen: boolean;
    payload: any;
}) => {
    switch (action.type) {
        case MENUONOFF:
            return {
                ...state,
                isOpen: action.isOpen,
            }
        case HYDRATE:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

const reducer = combineReducers({
    modal, menu
});

export default reducer;