import { createContext } from "react";

export const ThemeContext = createContext()

const INITIAL_STATE = {darkMode: false}

const themeReducer = (state, action) => {
    switch(action.type){
        case "TOGGLE":
            return{darkMode: !state.darkMode}
    }
    {
        "TOGGLE" ? 
        <>return{ darkMode= !state.darkMode }</>
        :
        <>return state</>
    } /* 8817115326
    249 */
}