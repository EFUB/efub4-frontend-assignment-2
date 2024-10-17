// themeReducer

import {ThemeState, ThemeActionTypes, SET_LIGHT_MODE, SET_DARK_MODE} from "../types/storeTypes";

// 초기 theme 상태 정의
const initialState: ThemeState = {
    isLightMode: false,
}

// 리듀서 정의
const reducer = (state = initialState, action: ThemeActionTypes): ThemeState => {
    switch (action.type){
        case SET_LIGHT_MODE:
            return {isLightMode: true};
        case SET_DARK_MODE:
            return {isLightMode: false};
        default:
            return state;
    }
}

export default reducer;
