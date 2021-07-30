import { createContext, useState } from "react";

export const ThemeContext = createContext({
    theme: "",
    handlechange:()=>{},
});

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("white")
    
    const handlechange = () => {

        setTheme(theme === "black" ? "white" : "black");
    }
    
    return (<ThemeContext.Provider value={{ theme, handlechange }}>
        {children}
    </ThemeContext.Provider>);

};
 

