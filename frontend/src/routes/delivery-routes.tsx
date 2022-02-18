import type { RouteProps } from '#/routes';

import { lazy } from 'react';
import { Role } from '@/utils';

const deliveryRoutes: RouteProps[] = [
	{
		path: '/delivery/orders',
		component: lazy(() => import('@/pages/delivery/OrdersPage')),
		fallback: <div>Orders Loading...</div>,
		auth: true,
		role: [Role.delivery],
	},
	{
		path: '/delivery/my-orders',
		component: lazy(() => import('@/pages/delivery/MyOrderPage')),
		fallback: <div>MyOrders Loading...</div>,
		auth: true,
		role: [Role.delivery],
	},
	{
		path: '/delivery/profile',
		component: lazy(() => import('@/pages/delivery/ProfilePage')),
		fallback: <div>Profile Loading...</div>,
		auth: true,
		role: [Role.delivery],
	},
];

export default deliveryRoutes;
