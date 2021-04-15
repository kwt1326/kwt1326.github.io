export const MODALONOFF = 'modal/MODALONOFF';

export function modalOnOff(isOpen: boolean) {
    return {
        type: MODALONOFF,
        isOpen,
    };
}