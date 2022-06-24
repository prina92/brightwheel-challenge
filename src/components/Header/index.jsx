import React from 'react';
import {Box, Text} from "@chakra-ui/react";

const Header = () => {
    return (
        <Box bg="gray.600" p={4} pos="sticky" top={0} w="100%" zIndex="2">
            <Text fontWeight="bold" color="white">
                Brightwheel JavaScript Coding Exercise
            </Text>
        </Box>
    );
};

export default Header;
