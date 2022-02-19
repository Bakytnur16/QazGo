import React from 'react';

import { useRecoilValue } from 'recoil';
import { userAtom } from '@/store';

import { LayoutTemplate } from '@/layout';

import { clientLogo, deliveryLogo } from '@/assets/image';

export default function OrderPage() {
	const user = useRecoilValue(userAtom);

	const header = {
		title: `Hi, ${user.username}!`,
		subTitle: 'kazGO-ға қайта қош келдіңіз!',
	};
	let logo;
	switch (user.role) {
		case 'client':
			logo = clientLogo;
			break;
		case 'delivery':
			logo = deliveryLogo;
			break;
		default:
			logo = null;
	}
	header.logo = logo;

	return <LayoutTemplate header={header} />;
}
