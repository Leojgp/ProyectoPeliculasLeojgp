import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Theme {
    backgroundColor: string;
    setBackgroundColor: (color: string) => void; 
}

const defaultTheme: Theme = {
    backgroundColor: 'white', 
    setBackgroundColor: () => {},
};

const ThemeContext = createContext<Theme>(defaultTheme);


export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [backgroundColor, setBackgroundColor] = useState<string>('white'); 

    const changeBackgroundColor = (color: string) => {
        setBackgroundColor(color);
    };

    return (
        <ThemeContext.Provider value={{ backgroundColor, setBackgroundColor: changeBackgroundColor }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    return useContext(ThemeContext);
};
