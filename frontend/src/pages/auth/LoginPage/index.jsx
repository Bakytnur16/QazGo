import React from 'react';
import { useHistory } from 'react-router-dom';

import { Box, TextField, Button, Snackbar } from '@mui/material';
import { LoginOutlined } from '@mui/icons-material';
import { LayoutTemplate } from '@/layout';

import { useSetState } from 'ahooks';
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
	const [loginData, setLoginData] = useSetState({
		username: '',
		password: '',
	});

	const [loginMessgae, setLoginMessage] = useSetState({
		open: false,
		content: '',
	});

	const handleLogin = () => {
		if (!Object.values(loginData).every(el => Boolean(el))) {
			setLoginMessage({ open: true, content: 'Барлығын толтыру керек' });
			return;
		}

		reqLog(loginData)
			.then(res => {
				console.log(res);
			})
			.catch(err => {
				setLoginMessage({ open: true, content: err.message });
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

				<Button
					variant="contained"
					style={{ marginTop: '20px' }}
					onClick={handleLogin}>
					Кіру
				</Button>
				<Button variant="outlined" onClick={() => history.push('/auth/register')}>
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
