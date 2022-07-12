import { createContext } from "react";

type ContextProps = {
    isOpenMenu: boolean;

    //methods
    openMenu: () => void;
    closeMenu: () => void;
}

export const UIContext = createContext({} as ContextProps)