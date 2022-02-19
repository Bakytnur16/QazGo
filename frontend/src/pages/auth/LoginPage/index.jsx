import React from 'react';
import { useHistory } from 'react-router-dom';

import { useSetRecoilState } from 'recoil';
import { userAtom } from '@/store';

import { Box, TextField, Button, Snackbar } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { LoginOutlined } from '@mui/icons-material';
import { LayoutTemplate } from '@/layout';

import { useSetState, useBoolean } from 'ahooks';
import { reqLog } from '@/service/api/auth-api';

import { LoginContentBox } from './style';

export default function LoginPage() {
	return (
		<LayoutTemplate
			header={{
				title: 'Кіру',
				logo: <LoginOutlined />,
			}}
			content={<LoginContent />}
		/>
	);
}

function LoginContent() {
	const history = useHistory();
	const setUser = useSetRecoilState(userAtom);
	const [loginData, setLoginData] = useSetState({
		username: '',
		password: '',
	});
	const [loginLoading, { set: setLoginLoading }] = useBoolean(false);

	const [loginMessgae, setLoginMessage] = useSetState({
		open: false,
		content: '',
	});

	const handleLogin = () => {
		setLoginLoading(true);

		if (!Object.values(loginData).every(el => Boolean(el))) {
			setLoginMessage({ open: true, content: 'Барлығын толтыру керек' });
			setLoginLoading(false);
			return;
		}

		reqLog(loginData)
			.then(res => {
				let {
					data: { access: jwt },
				} = res;

				// setUser(user => ({ ...user, jwt }));
				setLoginLoading(false);
			})
			.catch(err => {
				setLoginMessage({ open: true, content: err.message });
				setLoginLoading(false);
			});
	};

	return (
		<LoginContentBox>
			<Box
				sx={{
					height: '100%',

					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					gap: 2,
				}}>
				<TextField
					label="Қолданушы"
					color="primary"
					value={loginData.username}
					onChange={({ target: { value } }) =>
						setLoginData({ username: value })
					}
				/>
				<TextField
					label="Құпия сөз"
					color="primary"
					type="password"
					value={loginData.password}
					onChange={({ target: { value } }) =>
						setLoginData({ password: value })
					}
				/>

				<LoadingButton
					variant="contained"
					style={{ marginTop: '20px' }}
					onClick={handleLogin}
					loading={loginLoading}
					loadingIndicator="Орындалуда...">
					Кіру
				</LoadingButton>
				<Button
					variant="outlined"
					onClick={() => history.push('/auth/register')}>
					Тіркелу
				</Button>
			</Box>

			<Snackbar
				anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
				open={loginMessgae.open}
				autoHideDuration={3000}
				onClose={() => setLoginMessage({ open: false })}
				message={loginMessgae.content}
			/>
		</LoginContentBox>
	);
}
