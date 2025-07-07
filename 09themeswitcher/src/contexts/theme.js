import { createContext,useContext } from "react";

export  const ThemeContext = createContext({
    themeMode: "Light",
    darkTheme: ()=> {},
    lightTheme: ()=> {},
})

export  const ThemeProvider = ThemeContext.Provider;
 
// custome hooks  

export default function useTheme(){
    return useContext(ThemeContext);
}