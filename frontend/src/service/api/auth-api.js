import { apiServerInstance } from '../ajax';

// Login
export const reqLog = data => apiServerInstance.post('/user/login', data);

// Register
export const reqReg = data => apiServerInstance.post('/user/register', data);
