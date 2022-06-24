import React from 'react';
import PropTypes from 'prop-types';
import {Flex, Text} from "@chakra-ui/react";
import {COMMON_BACKEND_KEYS, COMPANY_KEYS, ADDRESS_KEYS} from "../../constants";
import StarredControl from "../StarredControl";

const {NAME, ID, STARRED } = COMMON_BACKEND_KEYS;
const {ADDRESS, DESCRIPTION} = COMPANY_KEYS;
const {ADDRESS1, ADDRESS2, CITY, POSTAL_CODE, STATE} = ADDRESS_KEYS;

const Company = ({company, isLoading, onClickStarred}) => {
    const companyAddress = company[ADDRESS];
    return (
            <Flex w="100%" direction="column" justify="center" p={6} position="relative">
                <StarredControl isLoading={isLoading} isActive={company[STARRED]} onClick={onClickStarred} />
                <Text fontSize="sm" fontStyle="italic">Company</Text>
                <Text whiteSpace="break-spaces" fontSize="3xl" fontWeight="bold">{company[NAME]}</Text>
                <Text whiteSpace="break-spaces" fontSize="xl" my={5}>{company[DESCRIPTION]}</Text>
                <Text whiteSpace="break-spaces">{`${companyAddress[ADDRESS1]}`}</Text>
                {companyAddress[ADDRESS2] ? <Text whiteSpace="break-spaces">{`${companyAddress[ADDRESS2]}`}</Text> : null}
                <Text whiteSpace="break-spaces">{`${companyAddress[CITY]} (${companyAddress[POSTAL_CODE]})`}</Text>
                <Text whiteSpace="break-spaces">{companyAddress[STATE]}</Text>
            </Flex>
    );
};

Company.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    onClickStarred: PropTypes.func.isRequired,
    company: PropTypes.shape({
        [NAME]: PropTypes.string.isRequired,
        [ID]: PropTypes.string.isRequired,
        [STARRED]: PropTypes.bool.isRequired,
        [ADDRESS]: PropTypes.shape({
            [ADDRESS1]: PropTypes.string.isRequired,
            [ADDRESS2]: PropTypes.string,
            [POSTAL_CODE]: PropTypes.string.isRequired,
            [CITY]: PropTypes.string.isRequired,
            [STATE]: PropTypes.string.isRequired,
        })
    }).isRequired,
}

export default Company;
