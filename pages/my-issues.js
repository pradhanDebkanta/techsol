import React from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import MyIssuesComp from '../component/MyIssues';
import { getLocalStorageData } from '../utils/localStorage/localStorageData';

const MyIssues = () => {
    const router = useRouter();
    if (typeof window !== 'undefined') {
        const accessToken = getLocalStorageData('profile');
        if (accessToken?.tkd) {
            return (
                <MyIssuesComp />
            )
        } else {
            router.replace('/sign-in')
        }
    }

    return (
        <div>loading.....</div>
    )
}

export default dynamic(() => Promise.resolve(MyIssues), { ssr: false })