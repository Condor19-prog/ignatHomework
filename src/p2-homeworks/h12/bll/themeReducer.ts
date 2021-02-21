type initStateType = {
    currentTheme: string
}
const initState = {
    currentTheme: 'dark'
};

export const themeReducer = (state = initState, action: changeThemeACType): initStateType => { // fix any
    switch (action.type) {
        case 'CHANGE-THEME': {
            return {...state, currentTheme: action.theme}
        }
        default:
            return state;
    }
};
export type changeThemeACType = {
    type: 'CHANGE-THEME'
    theme: string
}
export const changeThemeAC = (theme: string): changeThemeACType => ({type: 'CHANGE-THEME', theme})