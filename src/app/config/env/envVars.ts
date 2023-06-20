export const envVars = {
  nodeEnv: import.meta.env.NODE_ENV || "development",
  api: {
    https: import.meta.env.REACT_APP_BACKEND_URL_TESTING,
    wss: import.meta.env.REACT_APP_BACKEND_SOCKET_URL_TESTING,
  },
};
