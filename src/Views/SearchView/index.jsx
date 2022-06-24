import React, {useCallback, useEffect, useState, useContext} from 'react';
import PropTypes from "prop-types";
import debounce from "lodash.debounce";
import { AppContext } from "context/appContext";
import {searchService, markItem} from "http/services";
import SearchControls from "components/SearchControls";
import ResultsTable from "components/ResultsTable";
import {COMMON_BACKEND_KEYS} from "../../constants";

const {ID} = COMMON_BACKEND_KEYS;

const SearchView = ({setErrorToast}) => {
    const {searchResults, setSearchResults} = useContext(AppContext);
    const [loading, setLoading] = useState(false);
    const [starredLoading, setStarredLoading] = useState(null);
    const [searchValue, setSearchValue] = useState('');

    const debouncedSearch = useCallback(
        debounce(
            value => searchService(value, setSearchResults, setErrorToast, setLoading),
            200),
        []);

    useEffect(() => {
        if (searchValue) {
            debouncedSearch(searchValue);
        } else {
            setSearchResults(null);
        }
    }, [searchValue, debouncedSearch, setSearchResults]);

    const updateResults = updatedItem => {
        const itemIndex = searchResults.findIndex(item => item[ID] === updatedItem[ID]);
        const auxResults = [...searchResults];
        auxResults[itemIndex] = updatedItem;
        setSearchResults(auxResults);
    }

    const onClickStarred = async (item) => {
        await markItem(item, updateResults, setErrorToast, setStarredLoading);
    }

    return (
        <>
            <SearchControls
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />
            <ResultsTable results={searchResults} isLoading={loading} onClickStarred={onClickStarred} starredLoading={starredLoading}/>
        </>
    );
};

SearchView.propTypes = {
    setErrorToast: PropTypes.func.isRequired,
};

export default SearchView;
