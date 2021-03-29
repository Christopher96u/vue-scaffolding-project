export const FUREVER_PET_ROUTES = [
  {
    path: "create",
    name: "CreateFureverPet",
    component: () => import("@/views/design-platform/furever-pet/CreateFureverPet")
  },
  /*Don't touch PAYMENT route*/
  {
    path: "payment",
    name: "PaymentFureverPet",
    component: () => import("@/views/design-platform/furever-pet/PaymentFureverPet")
  }
]
