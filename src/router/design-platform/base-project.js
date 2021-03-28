export const BASE_PROJECT_ROUTES = [
  {
    path: "create",
    name: "CreateBaseProject",
    component: () => import("@/views/design-platform/base-project/CreateBaseProject")
  },
  /*
    ChooseCustomer will be a VIEW that we'll redirect if it's a corporative or personal customer
  {
    path: "choose-customer",
    name: "ChooseCustomer",
    component: ()=> import("@/views/design-platform/create-base-project/ChooseCustomer")
  },
  */
  {
    path: "payment",
    name: "Payment",
    component: () => import("@/views/design-platform/base-project/Payment")
  }
]
