import React, { lazy } from 'react';
import { Role } from '@/utils';

const commonRoutes = [
	{
		path: '/404',
		component: lazy(() => import('@/pages/common/PageNotFoundPage')),
		fallback: <div>404 Loading...</div>,
		auth: false,
		role: Role.all(),
	},
];

export default commonRoutes;
