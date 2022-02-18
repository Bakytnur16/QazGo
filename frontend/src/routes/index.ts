import type { RouteProps } from '#/routes';

import clientRoutes from './client-routes';
import deliveryRoutes from './delivery-routes';
import authRoutes from './auth-routes';
import commonRoutes from './common-routes';

const routes: RouteProps[] = [
	...clientRoutes,
	...deliveryRoutes,
	...authRoutes,
	...commonRoutes,
];

export default routes;
