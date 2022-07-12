import { IUInitialState } from "../../interfaces";

type uiReducerProps =
    | { type: '[UI] OPEN-MENU' }
    | { type: '[UI] CLOSE-MENU' }


export const uiReducer = (state: IUInitialState, action: uiReducerProps): IUInitialState => {
    switch (action.type) {
        case '[UI] OPEN-MENU':
            return {
                ...state,
                isOpenMenu: true
            }
        case '[UI] CLOSE-MENU':
            return {
                ...state,
                isOpenMenu: false
            }

        default:
            return state
    }
}