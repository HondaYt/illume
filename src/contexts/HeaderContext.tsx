import { createContext, useContext, useState, type ReactNode } from 'react';

const HeaderContext = createContext({
    isMainHeader: true,
    toggleHeader: () => { }
});

export const useHeaderContext = () => useContext(HeaderContext);

export const HeaderProvider = ({ children }: { children: ReactNode }) => {
    const [isMainHeader, setIsMainHeader] = useState(true);
    const toggleHeader = () => setIsMainHeader(!isMainHeader);

    return (
        <HeaderContext.Provider value={{ isMainHeader, toggleHeader }}>
            {children}
        </HeaderContext.Provider>
    );
};