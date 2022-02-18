import React from 'react';
import { useRecoilValue } from 'recoil';
import { userAtom } from '@/store';

import { LayoutTemplate } from '@/layout';

import { clientLogo, deliveryLogo } from '@/assets/image';

export default function PageNotFoundPage() {
	const user = useRecoilValue(userAtom);

	const header = {
		title: '404',
		subTitle: 'Мұндай бет жоқ...',
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
