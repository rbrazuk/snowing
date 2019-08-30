export const TOGGLE_MENU = 'toggle_menu';

export function toggleMenu(show) {
    return {
        type: TOGGLE_MENU,
        payload: show
    };
}