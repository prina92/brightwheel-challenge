import React from 'react';
import PropTypes from 'prop-types';
import {Flex, Text, Image} from "@chakra-ui/react";
import {COMMON_BACKEND_KEYS, ANIMAL_KEYS, TAXONOMY_KEYS} from "../../constants";
import StarredControl from "../StarredControl";

const {NAME, ID, STARRED, IMAGE} = COMMON_BACKEND_KEYS;
const {TAXONOMY} = ANIMAL_KEYS;
const {FAMILY, SCIENTIFIC_NAME} = TAXONOMY_KEYS;

const Animal = ({animal, isLoading, onClickStarred}) => {
    return (
        <Flex justify="space-between" position="relative">
            <StarredControl isLoading={isLoading} isActive={animal[STARRED]} onClick={onClickStarred}/>
            <Flex direction="column" justify="center" p={6}>
                <Text fontSize="sm" fontStyle="italic">Animal</Text>
                <Text whiteSpace="break-spaces" fontSize="3xl" fontWeight="bold">{animal[NAME]}</Text>
                <Text fontSize="2xl" my={5}>{animal[TAXONOMY][SCIENTIFIC_NAME]}</Text>
                <Text whiteSpace="break-spaces">{animal[TAXONOMY][FAMILY]}</Text>
            </Flex>
            <Flex justify="center">
                <Image
                    src={animal[IMAGE]}
                    alt={animal[NAME]}
                    boxSize={200}
                    objectFit='cover'
                    fallbackSrc="https://via.placeholder.com/200?text=No+image"
                />
            </Flex>
        </Flex>
    );
};

Animal.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    onClickStarred: PropTypes.func.isRequired,
    animal: PropTypes.shape({
        [NAME]: PropTypes.string.isRequired,
        [ID]: PropTypes.string.isRequired,
        [STARRED]: PropTypes.bool.isRequired,
        [IMAGE]: PropTypes.string,
        [TAXONOMY]: PropTypes.shape({
            [FAMILY]: PropTypes.string.isRequired,
            [SCIENTIFIC_NAME]: PropTypes.string.isRequired,
        }).isRequired,
    }).isRequired,
}

Animal.defaultProps = {[IMAGE]: ''};

export default Animal;
