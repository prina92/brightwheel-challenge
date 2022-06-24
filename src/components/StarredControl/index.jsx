import React from 'react';
import PropTypes from 'prop-types';
import {Button, Tooltip} from "@chakra-ui/react";
import {StarIcon} from '@chakra-ui/icons';

const StarredControl = ({isLoading, isActive, onClick}) => {
    return (
        <Tooltip label={isActive ? 'Remove from starred' : 'Add to starred'}>
            <Button
                size="sm"
                position="absolute"
                top={0}
                right={0}
                colorScheme="yellow"
                onClick={onClick}
                isLoading={isLoading}
            >
                <StarIcon color={isActive ? 'yellow.600' : 'yellow.200'}/>
            </Button>
        </Tooltip>
    );
};

StarredControl.propTypes = {
    isActive: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default StarredControl;
