import { styled } from '@mui/material';

export const LayoutTemplateBox = styled('div')(({ vh, theme }) => ({
	height: vh ? 100 * vh : '100vh',
	backgroundColor: '#F0F4FB',

	display: 'flex',
	flexDirection: 'column',
}));

export const HeaderBox = styled('header')(({ theme }) => ({
	flex: '0 0 125px',
	padding: '0 14px',
	backgroundColor: theme.palette.primary.main,
	borderRadius: '0px 0px 30px 30px',

	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',

	'.box': {
		display: 'flex',
		flexDirection: 'column',

		'.title': {
			color: '#fff',
			fontSize: '2.2rem',
			fontWeight: 'normal',
			margin: 0,
		},
		'.sub-title': {
			color: '#fff',
			fontSize: '1rem',
			fontWeight: 'normal',
			margin: 0,
		},
	},
	'.logo': {
		width: '48px',
		height: '48px',
		objectFit: 'cover',

		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',

		color: '#fff',
	},
}));

export const ContentBox = styled('main')(({ theme }) => ({
	overflow: 'hidden auto',
	flex: '1 1 100%',
	padding: '14px',
}));

export const BottomNavigationBox = styled('footer')(({ theme }) => ({
	height: '64px', // 删掉
	backgroundColor: '#fff',
}));
