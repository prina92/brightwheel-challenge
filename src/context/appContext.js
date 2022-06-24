import React, {createContext, useState} from 'react';

export const AppContext = createContext({
    searchResults: null,
    setSearchResults: () => {},
    starredCount: 0,
    updateStarredCount: () => {},
});

export const ContextProvider = ({children}) => {
    const [starredCount, setStarredCount] = useState(0);
    const [searchResults, setSearchResults] = useState(null);

    const updateValue = value => setStarredCount(value);

    return (
        <AppContext.Provider
            value={{
                updateStarredCount: setStarredCount,
                starredCount,
                searchResults,
                setSearchResults,
            }}
        >
            {children}
        </AppContext.Provider>
    )
}
