import React from 'react';
import { useHistory } from 'react-router-dom';

import { useRecoilValue } from 'recoil';
import { userAtom } from '@/store';

import { Box, Button } from '@mui/material';
import { LayoutTemplate } from '@/layout';

import { clientLogo, deliveryLogo } from '@/assets/image';

export default function PageNotFoundPage() {
	const user = useRecoilValue(userAtom);
	const history = useHistory();

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

	return (
		<LayoutTemplate
			header={header}
			content={
				<Box
					sx={{
						height: '100%',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}>
					<Button
						variant="contained"
						onClick={() => {
							history.replace('/');
						}}>
						Бастапқы бетге оралу
					</Button>
				</Box>
			}
		/>
	);
}
