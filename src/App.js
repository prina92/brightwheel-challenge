import React, {useContext} from 'react';
import {Box, Flex, Tabs, TabList, Tab, TabPanels, TabPanel, useToast} from "@chakra-ui/react";
import {AppContext} from "context/appContext";
import SearchView from "Views/SearchView";
import StarredView from "Views/StarredView";
import Header from 'components/Header';

function App() {
    const {starredCount} = useContext(AppContext);

    const toast = useToast();
    const showErrorToast = (message) => {
        toast({
            title: 'Oops, we had a problem!',
            description: message,
            duration: 10000,
            isClosable: true,
            status: 'warning',
        })
    };

    return (
        <div className="App">
            <Flex direction="column" align="center" bg="gray.100" minH="100vh">
                <Header/>
                <Box p={6} maxW={1280} w="100%" bg="white" h="100%">
                    <Tabs>
                        <TabList>
                            <Tab>Search</Tab>
                            <Tab>Starred ({starredCount})</Tab>
                        </TabList>
                        <TabPanels>
                            <TabPanel>
                                <SearchView setErrorToast={showErrorToast}/>
                            </TabPanel>
                            <TabPanel>
                                <StarredView setErrorToast={showErrorToast}/>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </Box>
            </Flex>
        </div>
    );
}

export default App;
