import { createContext,useContext } from "react";

export  const themeContext = createContext({
    themeMode: "Light",
    darkMode: ()=> {},
    lightMode: ()=> {},
})

export const themeProvider = themeContext.Provider;
 
// custome hooks 

export default function useTheme(){
    return useContext(themeContext);
}