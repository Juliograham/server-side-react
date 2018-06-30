import React from 'react';
import Home from './components/Home';
import App from './App';
import UsersList, { loadData } from './components/UsersList';


export default [
    {
        ...App,
        routes: [
            {
                ...Home,
                path: '/',
                exact: true
            },
            {
                ...UsersList,
                path: '/users'
            }
        ]
    }
];

