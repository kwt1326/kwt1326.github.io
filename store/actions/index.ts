export const MODALONOFF = 'modal/MODALONOFF';
export const SETMODAL = 'modal/SETMODAL';
export const MENUONOFF = 'modal/MENUONOFF';
export const MENULIST = 'modal/MENULIST';

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

export function menuOnOff(isOpen: boolean) {
    return {
        type: MENUONOFF,
        isOpen,
    }
}

export function setMenuList(list: any[]) {
    return {
        type: MENULIST,
        list
    }
}