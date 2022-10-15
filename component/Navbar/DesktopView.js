import React, { useState, memo } from 'react';
import {
    Box,
    Flex,
    Avatar,
    HStack,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useColorModeValue,
} from '@chakra-ui/react';
import { navItems, profileNavItems } from './NavItems';
import NavLink from './NavLink';
import { HiOutlineUser } from 'react-icons/hi';
import { VscIssueDraft } from 'react-icons/vsc';
import { AiOutlineLogin } from 'react-icons/ai';
import { IconContext } from 'react-icons';
import { useRouter } from 'next/router';

const DesktopView = () => {
    const router = useRouter();
    const [isSignIn, setSignIn] = useState(false);

    const gotoUrl = href => {
        href ? router.push(href) : null;
    }
    const activeColor = (path, trueCol, falseCol) => {
        return router.asPath.includes(path) ? trueCol : falseCol;
    }

    return (
        <>
            <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <HStack spacing={8} alignItems={'center'}>
                        <Box>TECHSOL</Box>
                    </HStack>
                    <HStack
                        as={'nav'}
                        spacing={4}
                        display={{ base: 'none', md: 'flex' }}>
                        {navItems.map(item => (
                            <NavLink key={item.key} href={item.href}>{item.label}</NavLink>
                        ))}
                    </HStack>

                    {/* <HStack spacing={8} alignItems={'center'}>
                        <Box>TECHSOL</Box>
                        <HStack
                            as={'nav'}
                            spacing={4}
                            display={{ base: 'none', md: 'flex' }}>
                            {navItems.map(item => (
                                <NavLink key={item.key} href={item.href}>{item.label}</NavLink>
                            ))}
                        </HStack>
                    </HStack> */}
                    <Flex alignItems={'center'}>
                        {isSignIn ? (
                            <Menu>
                                <MenuButton
                                    as={Button}
                                    rounded={'full'}
                                    variant={'link'}
                                    cursor={'pointer'}
                                    minW={0}
                                    _hover={{
                                        textDecoration: 'none',
                                    }}
                                    _active={{
                                        textDecoration: 'none'
                                    }}
                                >
                                    <Avatar
                                        size={'md'}
                                        src={
                                            'https://iimages.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                                        }
                                        name="Debkanta Pradhan"
                                        loading='lazy'
                                        showBorder={true}
                                    // bg='teal.300'
                                    />
                                </MenuButton>
                                <MenuList>
                                    <MenuItem
                                        onClick={() => { console.log('profile click') }}
                                        color='blueviolet'
                                        _hover={{
                                            color: 'blue'
                                        }}
                                    >
                                        <IconContext.Provider value={{ size: 16, style: { marginRight: 6, color: 'inherit' } }}>
                                            <HiOutlineUser />
                                        </IconContext.Provider>
                                        Profile
                                    </MenuItem>
                                    <MenuDivider />
                                    <MenuItem
                                        color={activeColor(profileNavItems[0].href, 'violet', 'blueviolet')}
                                        bg={activeColor(profileNavItems[0].href, 'var(--chakra-colors-gray-200)', '#fff')}
                                        _hover={{
                                            color: 'blue'
                                        }}
                                        onClick={() => { gotoUrl(profileNavItems[0].href) }}
                                    >
                                        <IconContext.Provider value={{ size: 16, style: { marginRight: 6, color: 'inherit' } }}>
                                            <VscIssueDraft />
                                        </IconContext.Provider>
                                        {profileNavItems[0].label}
                                    </MenuItem>
                                    <MenuItem
                                        color={activeColor(profileNavItems[1].href, 'violet', 'blueviolet')}
                                        bg={activeColor(profileNavItems[1].href, 'var(--chakra-colors-gray-200)', '#fff')}
                                        _hover={{
                                            color: 'blue'
                                        }}
                                        onClick={() => { gotoUrl(profileNavItems[1].href) }}
                                    >
                                        <IconContext.Provider value={{ size: 16, style: { marginRight: 6, color: 'inherit' } }}>
                                            <HiOutlineUser />
                                        </IconContext.Provider>
                                        {profileNavItems[1].label}
                                    </MenuItem>
                                </MenuList>
                            </Menu>
                        ) : (
                            <Menu>
                                <Button
                                    leftIcon={
                                        <IconContext.Provider value={{ size: 17, }}>
                                            <AiOutlineLogin />
                                        </IconContext.Provider>
                                    }
                                    colorScheme='twitter'
                                    onClick={() => gotoUrl('/sign-in')}
                                >
                                    Sign In
                                </Button>
                            </Menu>
                        )}
                    </Flex>
                </Flex>
            </Box>
        </>
    )
}

export default memo(DesktopView);