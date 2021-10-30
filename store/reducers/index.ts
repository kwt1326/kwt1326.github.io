import {
    MODALONOFF, SETMODAL, MENUONOFF, MENULIST
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

const menu = (state = { isOpen: false, list: [] }, action: {
    type: string;
    payload: any;
    isOpen?: boolean;
    list?: any[];
}) => {
    switch (action.type) {
        case MENUONOFF:
            return {
                ...state,
                isOpen: action.isOpen,
            }
        case MENULIST:
            return {
                ...state,
                list: action.list,
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