import { AiOutlineHome } from 'react-icons/ai';
import { VscIssues } from 'react-icons/vsc';
import { GoIssueClosed } from 'react-icons/go';

export const navItems = [
    {
        label: 'Home',
        key: 'home',
        href: '/',
        icon: <AiOutlineHome />,
    },
    {
        label: 'All Issues',
        key: 'all_issues',
        href: '/all-issues',
        icon: <VscIssues />,
    },
    {
        label: 'Resolve Issues',
        key: 'resolve_issues',
        href: '/resolve-issues',
        icon: <GoIssueClosed />,
    },
];

export const profileNavItems = [
    {
        label: 'My Issues',
        key: 'my_issues',
        href: '/my-issues'
    },
    {
        label: 'Company Portal',
        key: 'company_portal',
        href: '/company-portal'
    },

]
