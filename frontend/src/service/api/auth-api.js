import { apiServerInstance } from '../ajax';

// Login
export const reqLog = data => apiServerInstance.post('/api-user/login/', data);

// Register
export const reqReg = data => apiServerInstance.post('/user/register/', data);

// Get data
export const reqGetData = () => apiServerInstance.get('/user/')