import { createContext, useState } from 'react';

const ModeContext = createContext();

const ModeProvider = ({ children }) => {
    const [mode, setMode] = useState('light');

    const modeToggler = () => {
        const tempMode = (mode === 'light' ? 'dark' : 'light')
        setMode(tempMode);
    }

    return (
        <ModeContext.Provider value={{ mode, modeToggler }}>
            {children}
        </ModeContext.Provider>
    );
};

export { ModeContext, ModeProvider };