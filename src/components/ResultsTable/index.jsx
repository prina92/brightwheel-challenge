import React from 'react';
import PropTypes from 'prop-types';
import {Box, Text, TableContainer, Table, Tr, Td, Tbody, Spinner} from "@chakra-ui/react";
import {PRODUCT_TYPES, COMMON_BACKEND_KEYS} from "../../constants";
import Product from "../Product";
import Animal from "../Animal";
import Company from "../Company";

const {ANIMAL, COMPANY, PRODUCT} = PRODUCT_TYPES;
const {NAME, ID, TYPE} = COMMON_BACKEND_KEYS;

const ResultsTable = ({results, onClickStarred, isLoading, starredLoading}) => {
    if (isLoading) return <Box textAlign="center" p={6}><Spinner size="xl"/></Box>;
    if (!results) return <Box textAlign="center" mt={8}><Text>Your search results will be shown here :)</Text></Box>;
    if (!results.length) return <Box textAlign="center" mt={8}><Text>No results found for your search :(</Text></Box>;

    const renderItemByType = (item) => {
        if (item[TYPE] === ANIMAL) return (
            <Animal
                animal={item}
                isLoading={starredLoading === item[ID]}
                onClickStarred={() => onClickStarred(item)}
            />);
        if (item[TYPE] === COMPANY) return (
            <Company
                company={item}
                isLoading={starredLoading === item[ID]}
                onClickStarred={() => onClickStarred(item)}
            />);
        if (item[TYPE] === PRODUCT) return (
            <Product
                product={item}
                isLoading={starredLoading === item[ID]}
                onClickStarred={() => onClickStarred(item)}
            />);
        return `${item[NAME]} - ${item[TYPE]}` // fallback in case of type error
    }

    return (
        <TableContainer>
            <Table variant="simple">
                <Tbody>
                    {results.map(item => (
                        <Tr key={`${item[TYPE]}-${item[ID]}`}>
                            <Td>{renderItemByType(item)}</Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </TableContainer>
    );
};

ResultsTable.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    starredLoading: PropTypes.string,
    onClickStarred: PropTypes.func.isRequired,
    results: PropTypes.arrayOf(PropTypes.shape({
        [NAME]: PropTypes.string.isRequired,
        [ID]: PropTypes.string.isRequired,
        [TYPE]: PropTypes.string.isRequired,
    })),
}

export default ResultsTable;
