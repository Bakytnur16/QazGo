import React, { lazy } from 'react';
import { Role } from '@/utils';

const clientRoutes = [
	{
		path: '/client/orders',
		component: lazy(() => import('@/pages/client/OrdersPage')),
		fallback: <div>Orders Loading...</div>,
		auth: true,
		role: [Role.client],
	},
	{
		path: '/client/create-order',
		component: lazy(() => import('@/pages/client/CreateOrderPage')),
		fallback: <div>Create Order Loading...</div>,
		auth: true,
		role: [Role.client],
	},
	{
		path: '/client/profile',
		component: lazy(() => import('@/pages/client/ProfilePage')),
		fallback: <div>Profile Loading...</div>,
		auth: true,
		role: [Role.client],
	},
];

export default clientRoutes;
