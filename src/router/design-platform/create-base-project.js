export const BASE_PROJECT_ROUTES = [
  {
    path: "choose-customer",
    name: "ChooseCustomer",
    component: ()=> import("@/views/design-platform/create-base-project/ChooseCustomer")
  },
  {
    path: "start-project",
    name: "StartProject",
    component: ()=> import("@/views/design-platform/create-base-project/StartProject")
  },
  {
    path: "choose-size",
    name: "ChooseSize",
    component: () => import("@/views/design-platform/create-base-project/ChooseSize")
  },
  {
    path: "payment",
    name: "Payment",
    component: () => import("@/views/design-platform/create-base-project/Payment")
  },
  {
    path: "congrats-project",
    name: "CongratsProject",
    component: () => import("@/views/design-platform/create-base-project/CongratsProject")
  }
]
