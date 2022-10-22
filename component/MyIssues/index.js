import React from 'react';
import { Box, Tabs, Tab, TabList, TabPanels, TabPanel, Text } from '@chakra-ui/react';
import AllMyIssues from './AllMyIssues';
import ResolveIssues from './ResolveIssues';
import CreateIssue from './CreateIssue';


const MyIssues = () => {
    return (
        <Box ml={['5%', '5%', '6%', '6%']} mr={['5%', '5%', '6%', '6%']} mt={['65px', '65px', '20px', '20px']}>
            <Tabs isFitted variant='enclosed-colored' colorScheme={'twitter'}>
                <TabList>
                    <Tab>
                        <Text
                            fontSize={{ base: '13px', sm: '14px', md: '16px' }}
                        >
                            All my issus
                        </Text>
                    </Tab>
                    <Tab>
                        <Text
                            fontSize={{ base: '13px', sm: '14px', md: '16px' }}
                        >
                            Resolved issue
                        </Text>
                    </Tab>
                    <Tab>
                        <Text
                            fontSize={{ base: '13px', sm: '14px', md: '16px' }}
                        >
                            Create a issue
                        </Text>
                    </Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <AllMyIssues />
                    </TabPanel>
                    <TabPanel>
                        <ResolveIssues />
                    </TabPanel>
                    <TabPanel>
                        <CreateIssue />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    )
}

export default MyIssues