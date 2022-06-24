import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import {Input} from "@chakra-ui/react";

const SearchControls = ({ searchValue, setSearchValue, radioValue, setRadioValue }) => {
    const searchInputRef = useRef(null);

    useEffect(() => {
        searchInputRef.current.focus();
    }, []);

    return (
        <>
            <Input
                ref={searchInputRef}
                my={3}
                value={searchValue}
                onChange={e => setSearchValue(e.target.value)}
                placeholder="Type to search..."
            />
        </>
    );
};

SearchControls.propTypes = {
    searchValue: PropTypes.string.isRequired,
    setSearchValue: PropTypes.func.isRequired,
}

export default SearchControls;
