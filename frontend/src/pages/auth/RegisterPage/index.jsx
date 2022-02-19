import React from 'react';
import { useHistory } from 'react-router-dom';

import {
	Box,
	TextField,
	Button,
	Snackbar,
	RadioGroup,
	Radio,
	FormLabel,
	FormControl,
	FormControlLabel,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { LoginOutlined } from '@mui/icons-material';
import { LayoutTemplate } from '@/layout';

import { useSetState, useBoolean } from 'ahooks';
import { reqLog } from '@/service/api/auth-api';

import { RegisterContentBox } from './style';

export default function RegisterPage() {
	return (
		<LayoutTemplate
			header={{
				title: 'Тіркелу',
				logo: <LoginOutlined />,
			}}
			content={<RegisterContent />}
		/>
	);
}

function RegisterContent() {
	const history = useHistory();
	const [registerData, setRegisterData] = useSetState({
		username: '',
		password: '',
		role: 'client',
	});
	const [registerLoading, { set: setRegisterLoading }] = useBoolean(false);

	const [loginMessgae, setRegisterMessage] = useSetState({
		open: false,
		content: '',
	});

	const handleRegister = () => {
		setRegisterLoading(true);

		if (!Object.values(registerData).every(el => Boolean(el))) {
			setRegisterMessage({ open: true, content: 'Барлығын толтыру керек' });
			setRegisterLoading(false);
			return;
		}

		reqLog(registerData)
			.then(res => {
				console.log(res);
				setRegisterLoading(false);
			})
			.catch(err => {
				setRegisterMessage({ open: true, content: err.message });
				setRegisterLoading(false);
			});

		console.log(registerData);
	};

	return (
		<RegisterContentBox>
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
					value={registerData.username}
					onChange={({ target: { value } }) =>
						setRegisterData({ username: value })
					}
				/>
				<TextField
					label="Құпия сөз"
					color="primary"
					type="password"
					value={registerData.password}
					onChange={({ target: { value } }) =>
						setRegisterData({ password: value })
					}
				/>
				<FormControl>
					<FormLabel id="userRole">Рөл</FormLabel>

					<RadioGroup
						aria-labelledby="userRole"
						defaultValue={registerData.role}>
						<FormControlLabel
							value={'client'}
							control={<Radio />}
							label="Клиент"
						/>
						<FormControlLabel
							value="delivery"
							control={<Radio />}
							label="Тасылмалдаушы"
						/>
					</RadioGroup>
				</FormControl>

				<LoadingButton
					variant="contained"
					style={{ marginTop: '20px' }}
					onClick={handleRegister}
					loading={registerLoading}
					loadingIndicator="Орындалуда...">
					Тіркелу
				</LoadingButton>
				<Button variant="outlined" onClick={() => history.push('/auth/login')}>
					Кіру
				</Button>
			</Box>

			<Snackbar
				anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
				open={loginMessgae.open}
				autoHideDuration={3000}
				onClose={() => setRegisterMessage({ open: false })}
				message={loginMessgae.content}
			/>
		</RegisterContentBox>
	);
}
