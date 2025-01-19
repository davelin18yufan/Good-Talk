export const ROUTES = {
  HOME: "/",
  LOG_IN: "/login",
  SIGN_UP: "/signup",
  DASHBOARD: "/dashboard",
  ARTICLE: (id: string = "") => `/article/${id}`,
  PROFILE: (id: string = "") => `/profile/${id}`,
}
