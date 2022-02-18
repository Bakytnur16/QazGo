import React, { memo } from 'react';
import { useSafeState, useEventListener } from 'ahooks';

import {
	LayoutTemplateBox,
	HeaderBox,
	ContentBox,
	BottomNavigationBox,
} from './style';

/**
 *
 * @returns {?number} 1vh = ?(px)
 */
function use1vh() {
	const [vh, setVh] = useSafeState(
		(document.documentElement?.clientHeight || window.innerHeight) * 0.01,
	);

	useEventListener('resize', () => {
		setVh(
			(document.documentElement?.clientHeight || window.innerHeight) * 0.01,
		);
	});

	// 检测是否是 移动设备
	// 1. 移动设备 浏览器的 DOM元素有 tontouchstart 属性, 桌面设备没有这个属性
	// 2. 侦测屏幕方向, 移动设备 可以改变方向 (横屏或竖屏), 桌面设备做不到
	if (
		'ontouchstart' in document.documentElement &&
		typeof window.orientation !== 'undefined'
	) {
		return vh;
	} else {
		return null;
	}
}

export default memo(function LayoutTemplate({ header, content, footer }) {
	const vh = use1vh();

	return (
		<LayoutTemplateBox vh={vh}>
			<HeaderBox>
				<div className="box">
					{header && header.title ? (
						<h1 className="title">{header.title}</h1>
					) : null}
					{header && header.subTitle ? (
						<h3 className="sub-title">{header.subTitle}</h3>
					) : null}
				</div>
				{header && header.logo ? (
					<img className="logo" src="" alt="logo">
						{header.logo}
					</img>
				) : null}

				{header && header.other ? header.other : null}
			</HeaderBox>
			<ContentBox>{content}</ContentBox>
			{footer ? <BottomNavigationBox>{footer}</BottomNavigationBox> : null}
		</LayoutTemplateBox>
	);
});
