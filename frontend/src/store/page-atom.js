import { atom } from 'recoil';
import { getLatestState, localStorage } from '@/utils';

export const defaultPageState = {
	// 界面语言, 默认为哈萨克语
	locale: 'kzKZ',
};

const [isValid, state] = getLatestState(
	localStorage.get('page', {}),
	defaultPageState,
);

// LocalStorage内数据"过期"
if (!isValid) {
	localStorage.set('page', state);
}

export const pageAtom = atom({
	key: 'pageAtom',
	// default value, aka initial value
	default: localStorage.get('page', state),
});
