const env = {
	API_KEY: import.meta.env.VITE_APP_LAST_FM_API_KEY || '',
	API_SECRET: import.meta.env.VITE_APP_LAST_FM_SECRET || '',
	LOGIN_URL: import.meta.env.VITE_APP_LAST_FM_LOGIN_URL || '',
	CALLBACK_URL: import.meta.env.VITE_APP_LAST_FM_CALLBACK_URL || ''
};

export default env;
export type LastFmEnv = typeof env;
