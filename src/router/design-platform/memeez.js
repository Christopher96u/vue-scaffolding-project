export const MEMEEZ_ROUTES = [
  {
    path: "create",
    name: "CreateMemeez",
    component: () => import("@/views/design-platform/memeez/CreateMemeez")
  },
  /*Don't touch PAYMENT route*/
  {
    path: "payment",
    name: "PaymentMemeez",
    component: () => import("@/views/design-platform/memeez/PaymentMemeez")
  }
]
