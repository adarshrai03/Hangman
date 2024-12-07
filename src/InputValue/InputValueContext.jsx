
import React, { createContext, useState } from 'react';

export const InputValueContext = createContext();

export const InputValueProvider = ({ children }) => {
    const [inputvalue, setValue] = useState('');
    const [result, setResult] = useState("");

    return (
        <InputValueContext.Provider value={{ inputvalue, setValue , result , setResult }}>
            {children}
        </InputValueContext.Provider>
    );
};
