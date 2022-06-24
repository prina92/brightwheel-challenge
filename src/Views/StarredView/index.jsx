import React, {useEffect, useState, useContext} from 'react';
import {Box, Text} from "@chakra-ui/react";
import PropTypes from "prop-types";
import {fetchStarredResults, markItem} from "http/services";
import {AppContext} from "context/appContext";
import ResultsTable from "components/ResultsTable";
import {COMMON_BACKEND_KEYS} from "../../constants";

const {ID} = COMMON_BACKEND_KEYS;

const StarredView = ({setErrorToast}) => {
    const {searchResults, updateStarredCount} = useContext(AppContext);

    const [loading, setLoading] = useState(false);
    const [starredResults, setResults] = useState([]);
    const [starredLoading, setStarredLoading] = useState(null);

    useEffect(() => {
        const fetchResults = async () => {
            await fetchStarredResults(setResults, console.error, setLoading);
        }
        fetchResults();
    }, [setResults, setLoading, searchResults]);

    useEffect(() => {
        updateStarredCount(starredResults.length);
    }, [starredResults, updateStarredCount]);

    if (!starredResults.length) return (
        <Box textAlign="center">
            <Text>You have no starred items yet. Start adding a few in the search tab!</Text>
        </Box>
    );

    const updateResults = (updatedItem) => {
        const itemIndex = starredResults.findIndex(item => item[ID] === updatedItem[ID]);
        const auxResults = [...starredResults];
        auxResults.splice(itemIndex, 1);
        setResults(auxResults);
    }

    const onClickStarred = async (item) => {
        await markItem(item, updateResults, setErrorToast, setStarredLoading);
    }

    return (
        <ResultsTable
            results={starredResults}
            isLoading={loading}
            starredLoading={starredLoading}
            onClickStarred={onClickStarred}
        />
    );
};

StarredView.propTypes = {
    setErrorToast: PropTypes.func.isRequired,
}

export default StarredView;
