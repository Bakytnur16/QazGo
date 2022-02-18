import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil';

import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { kkKZ, ruRU } from '@/i18n';

import { getLatestState, localStorage } from '@/utils';
import { defaultUserState, defaultPageState } from '@/store';

import App from './App';

// 初始化用户
getLatestState(localStorage.get('user', {}), defaultUserState);
// 初始化语言
const [_, state] = getLatestState(
	localStorage.get('page', {}),
	defaultPageState,
);

i18next.use(initReactI18next).init({
	resources: {
		kkKZ: {
			translation: kkKZ,
		},
		ruRU: {
			translation: ruRU,
		},
	},
	lng: state.locale,
	// 兜底语言
	fallbackLng: 'kkKZ',
	interpolation: {
		escapeValue: false,
	},
});

ReactDOM.render(
	<StrictMode>
		<RecoilRoot>
			<App />
		</RecoilRoot>
	</StrictMode>,
	document.getElementById('root'),
);
