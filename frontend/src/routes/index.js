import clientRoutes from './client-routes';
import deliveryRoutes from './delivery-routes';
import authRoutes from './auth-routes';
import commonRoutes from './common-routes';

const routes = [
	...clientRoutes,
	...deliveryRoutes,
	...authRoutes,
	...commonRoutes,
];

export default routes;
