import React, { lazy } from 'react';
import { Role } from '@/utils';

const authRoutes = [
	{
		path: '/auth/login',
		component: lazy(() => import('@/pages/auth/LoginPage')),
		fallback: <div>Login Loading...</div>,
		auth: false,
		role: [Role.guest],
	},
	{
		path: '/auth/register',
		component: lazy(() => import('@/pages/auth/RegisterPage')),
		fallback: <div>Register Loading...</div>,
		auth: false,
		role: [Role.guest],
	},
];

export default authRoutes;
