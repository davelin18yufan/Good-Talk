export const ROUTES = {
  HOME: "/",
  LOG_IN: "/login",
  SIGN_UP: "/signup",
  DASHBOARD: "/dashboard",
  ARTICLE: (id: string = "") => `/article/${id}`,
  PROFILE: (id: string = "") => `/profile/${id}`,
}

export const BASE_URL = "http://localhost:3000"
export const API_ROUTES = "api/v1"