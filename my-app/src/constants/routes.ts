const BACKEND_PREFIX = "/api";

const FRONT_ROUTES = {} as const;
const BACKEND_ROUTES = {
  AUTH: {
    LOGIN: `${BACKEND_PREFIX}/auth/login`,
  },
} as const;

export { FRONT_ROUTES, BACKEND_ROUTES };
