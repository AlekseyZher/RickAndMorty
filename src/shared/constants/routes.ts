export const ROUTES = {
  HOME: '/',
  CHARACTER: '/character/:id',
  CHARACTER_BY_ID: (id: number | string) => `/character/${id}`
} as const;
