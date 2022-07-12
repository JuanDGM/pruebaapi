import { FC, ReactNode, useReducer } from "react"
import { uiReducer } from "."
import { IUInitialState } from "../../interfaces"
import { UIContext } from "./UIContext"

const UI_INITIAL_STATE:IUInitialState = {
    isOpenMenu: false
}

interface Props{
    children:ReactNode    
}

export const UIProvider:FC<Props> = ({children}) => {
  
    const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE)
  
    const openMenu = ()=>{
        dispatch({type:'[UI] OPEN-MENU'})
    }
    
    const closeMenu = ()=>{
        dispatch({type:'[UI] CLOSE-MENU'})
    }

    return (
    <UIContext.Provider value={{
        ...state,

        //methods
        openMenu,
        closeMenu
    }}>
        {children}
    </UIContext.Provider>
  )
}
