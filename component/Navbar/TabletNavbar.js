import React, { memo } from 'react'
import {
    Box,
    Flex,
    HStack,
    useColorModeValue,

} from '@chakra-ui/react';
import { navItems } from './NavItems';
import NavLink from './NavLink';
import navbarCss from '../../assets/css/navbar.module.css';



const TabletNavbar = () => {
    return (
        <>
            {/* for top arrow */}
            {/* <Box>

            </Box> */}
            {/* for bottom navigation */}
            <div className={navbarCss.tabletBottomNavContainer}>
                <Box
                    bg={useColorModeValue('gray.100', 'gray.900')}
                    px={4}
                >
                    <Flex h={12} alignItems={'center'} justifyContent={'space-between'}>

                        <HStack
                            as={'nav'}
                            spacing={4}
                        // display={{ base: 'none', md: 'flex' }}
                        >
                            {navItems.map(item => (
                                <NavLink key={item.key} href={item.href}>{item.label}</NavLink>
                            ))}
                        </HStack>
                    </Flex>
                </Box>
            </div>
        </>
    )
}

export default memo(TabletNavbar);