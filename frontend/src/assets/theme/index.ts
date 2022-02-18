import type { Localization } from '@mui/material/locale';
import { createTheme } from '@mui/material/styles';

export default function getTheme(uiLocale: Localization) {
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
