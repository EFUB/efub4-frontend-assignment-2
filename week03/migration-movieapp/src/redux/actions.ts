import {SET_LIGHT_MODE, SET_DARK_MODE, ThemeActionTypes} from "../types/storeTypes";

export const setLightMode = (): ThemeActionTypes => {
    return {
        type: SET_LIGHT_MODE
    }
}

export const setDarkMode = (): ThemeActionTypes => {
    return{
        type: SET_DARK_MODE
    }
}