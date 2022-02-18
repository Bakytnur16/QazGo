import { createTheme } from '@mui/material/styles';

export default function getTheme(uiLocale) {
	return createTheme(
		{
			palette: {
				mode: 'light',
				primary: {
					main: '#346EFE',
				},
			},
		},
		uiLocale,
	);
}
