import React, { memo, Suspense } from 'react';
import { Route, Redirect, useLocation } from 'react-router-dom';

import { useRecoilValue } from 'recoil';
import { userAtom } from '@/store';

export default memo(function RouteGuard({ routes }) {
	const { pathname } = useLocation();
	const user = useRecoilValue(userAtom);
	const authenticateStatus = Boolean(user.jwt);

	const targetConfig = routes.find(
		routeConfig => routeConfig.path === pathname,
	);

	// 校验 路由合法性, 授权, 权限
	if (
		targetConfig &&
		targetConfig.auth === authenticateStatus &&
		targetConfig.role.includes(user.role)
	) {
		return (
			<Suspense fallback={targetConfig.fallback}>
				<Route path={targetConfig.path} component={targetConfig.component} />;
			</Suspense>
		);
	}

	// 根路由 处理
	if (pathname === '/') {
		switch (user.role) {
			case 'client':
				return <Redirect to="/client/orders" />;
			case 'delivery':
				return <Redirect to="/delivery/orders" />;
			default:
				return <Redirect to="/auth/login" />;
		}
	}

	if (targetConfig && targetConfig.auth !== authenticateStatus) {
		// auth 错误
		return <Redirect to="/auth/login" />;
	}

	return <Redirect to="/404" />;
});
