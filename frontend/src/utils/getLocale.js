/**
 * 根据自定义的 locale字符串返回 (pageAtom储存的 locale属性)
 * meterial design 用到的 locale对象
 * date-fns 用到的 locale对象
 */

import { kzKZ, ruRU } from '@mui/material/locale';
import { kk, ru } from 'date-fns/locale';

export default function getLocale(locale) {
	switch (locale) {
		case 'kkKZ':
			return {
				uiLocale: kzKZ,
				dateLocale: kk,
			};
		case 'ruRU':
			return {
				uiLocale: ruRU,
				dateLocale: ru,
			};
		default:
			return {
				uiLocale: kzKZ,
				dateLocale: kk,
			};
	}
}
