import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text',
    },
    {
        title: 'Manage Users',
        path: '/manageusers',
        icon: <FaIcons.FaUsersCog />,
        cName: 'nav-text',
    },
    {
        title: 'TWE Archive',
        path: '/twearchive',
        icon: <FaIcons.FaEdit />,
        cName: 'nav-text',
    },
    {
        title: 'Profile',
        path: '/profile',
        icon: <FaIcons.FaUserCog />,
        cName: 'nav-text',
    },
]