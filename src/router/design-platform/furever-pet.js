export const FUREVER_PET_ROUTES = [
  {
    path: "upload-images",
    name: "UploadImages",
    component: ()=> import("@/views/design-platform/furever-pet/UploadImages")
  },
  {
    path: "choose-shape",
    name: "ChooseShape",
    component: () => import("@/views/design-platform/furever-pet/ChooseShape")
  },
  {
    path: "tail-position",
    name: "TailPosition",
    component: ()=> import("@/views/design-platform/furever-pet/TailPosition")
  },
  {
    path: "choose-fur",
    name: "ChooseFur",
    component: ()=> import("@/views/design-platform/furever-pet/ChooseFur")
  },
  {
    path: "plush-position",
    name: "PlushPosition",
    component: ()=> import("@/views/design-platform/furever-pet/PlushPosition")
  },
  {
    path: "choose-body-color",
    name: "ChooseBodyColor",
    component: ()=> import("@/views/design-platform/furever-pet/ChooseBodyColor")
  },
  {
    path: "eyes-color",
    name: "EyesColor",
    component: () => import("@/views/design-platform/furever-pet/EyesColor")
  },
  {
    path: "additional-info",
    name: "AdditionalInfo",
    component: () => import("@/views/design-platform/furever-pet/AdditionalInfo")
  },
  {
    path: "resume",
    name: "Resume",
    component: () => import("@/views/design-platform/furever-pet/Resume")
  },
  {
    path: "addons",
    name: "addons",
    component: () => import("@/shared/addons")
  },
  {
    path: "add-sounds",
    name: "add-sounds",
    component: () => import("@/shared/add-sounds")
  },
  {
    path: "add-scents",
    name: "add-scents",
    component: () => import("@/shared/add-scents")
  },
  {
    path: "add-products",
    name: "add-products",
    component: () => import("@/shared/add-products")
  },
  {
    path: "payment",
    name: "PaymentFureverPet",
    component: () => import("@/views/design-platform/furever-pet/PaymentFureverPet")
  },
  {
    path: "congrats",
    name: "CongratsFureverPet",
    component: () => import("@/views/design-platform/furever-pet/CongratsFureverPet")
  }
]
