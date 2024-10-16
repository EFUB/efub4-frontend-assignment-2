// 전체 상태 정의
// export interface RootState {
//     theme: ThemeState;
// }

// ThemeState 타입 정의
export interface ThemeState{
    isLightMode: boolean;
}

// 액션 타입 정의
export const SET_LIGHT_MODE = "SET_LIGHT_MODE";
export const SET_DARK_MODE = "SET_DARK_MODE";

interface SetLightModeAction{
    type: typeof SET_LIGHT_MODE;
}
interface SetDarkModeAction{
    type: typeof SET_DARK_MODE;
}

export type ThemeActionTypes = SetLightModeAction | SetDarkModeAction;
