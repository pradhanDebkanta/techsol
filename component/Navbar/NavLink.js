import React from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { Link, useColorModeValue } from '@chakra-ui/react';

const NavLink = ({ href, children }) => {
    const router = useRouter();

    const activeColor = (path, trueCol, falseCol) => {
        return router.asPath === path ? trueCol : falseCol;
    }
    return (
        <>
            <NextLink href={href}>
                <Link
                    px={2}
                    py={1}
                    rounded={'md'}
                    color={activeColor(href, 'violet', '#555')}
                    _hover={{
                        textDecoration: 'none',
                        bg: useColorModeValue('gray.200', 'gray.700'),
                        color: 'blueviolet'
                    }}
                    href={''}>
                    {children}
                </Link>
            </NextLink>
        </>
    )
}

export default NavLink