export const MODALONOFF = 'modal/MODALONOFF';
export const SETMODAL = 'modal/SETMODAL';
export const MENUONOFF = 'modal/MENUONOFF';

export function modalOnOff(isOpen: boolean) {
    return {
        type: MODALONOFF,
        isOpen,
    };
}

export function setModal(modalComponent: JSX.Element) {
    return {
        type: SETMODAL,
        modalComponent,
    };
}

export function menuOnOff(isOpen: JSX.Element) {
    return {
        type: MENUONOFF,
        isOpen,
    }
}