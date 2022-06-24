import React from 'react';
import PropTypes from 'prop-types';
import {Flex, Text, Image} from "@chakra-ui/react";
import {COMMON_BACKEND_KEYS, PRODUCT_KEYS} from "../../constants";
import StarredControl from "../StarredControl";

const {NAME, ID, STARRED, IMAGE} = COMMON_BACKEND_KEYS;
const {PRODUCT_CATEGORY, PREVIEW_TEXT} = PRODUCT_KEYS;

const Product = ({product, isLoading, onClickStarred}) => {
    return (
        <Flex justify="space-between" position="relative">
            <StarredControl isLoading={isLoading} isActive={product[STARRED]} onClick={onClickStarred}/>
            <Flex direction="column" justify="center" p={6}>
                <Text fontSize="sm" fontStyle="italic">Product</Text>
                <Text whiteSpace="break-spaces" fontSize="3xl" fontWeight="bold">{product[NAME]}</Text>
                <Text fontSize="2xl" my={5}>{product[PRODUCT_CATEGORY]}</Text>
                <Text whiteSpace="break-spaces">{product[PREVIEW_TEXT]}</Text>
            </Flex>
            <Flex justify="center" minH={150}>
                <Image
                    src={product[IMAGE]}
                    alt={product[NAME]}
                    boxSize={200}
                    objectFit='cover'
                    fallbackSrc="https://via.placeholder.com/200?text=No+image"
                />
            </Flex>
        </Flex>
    );
};

Product.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    onClickStarred: PropTypes.func.isRequired,
    product: PropTypes.shape({
        [NAME]: PropTypes.string.isRequired,
        [PRODUCT_CATEGORY]: PropTypes.string.isRequired,
        [PREVIEW_TEXT]: PropTypes.string.isRequired,
        [ID]: PropTypes.string.isRequired,
        [STARRED]: PropTypes.bool.isRequired,
        [IMAGE]: PropTypes.string,
    }).isRequired,
}

Product.defaultProps = {[IMAGE]: ''};

export default Product;
