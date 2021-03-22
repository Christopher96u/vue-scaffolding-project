export const AUTH_ROUTES =   [
  {
    path: 'login',
    name: 'Login',
    component: () =>
      import('@/views/design-platform/auth/Login'),
  },
  {
    path: 'register',
    name: 'Register',
    component: () =>
      import('@/views/design-platform/auth/Register'),
  },
  {
    path: 'recoverpassword',
    name: 'RecoverPassword',
    component: () =>
      import('@/views/design-platform/auth/RecoverPassword'),
  },
  {
    path: 'confirmpassword',
    name: 'ConfirmPassword',
    component: () =>
      import('@/views/design-platform/auth/ConfirmPassword'),
  },
];
