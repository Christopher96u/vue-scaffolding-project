export const MEMEEZ_ROUTES = [
  {
    path: "upload-images",
    /*name: "UploadImages",*/
    component: () => import("@/views/design-platform/memeez/UploadImages")
  },
  {
    path: "skin-tone",
    component: () => import("@/views/design-platform/memeez/SkinTone")
  },
  {
    path: "hair-color",
    component: () => import("@/views/design-platform/memeez/HairColor")
  },
  {
    path: "eyes-color",
    component: () => import("@/views/design-platform/memeez/EyesColor")
  },
  {
    path: "additional-info",
    component: () => import("@/views/design-platform/memeez/AdditionalInfo")
  },
  {
    path: "resume",
    component: () => import("@/views/design-platform/memeez/Resume")
  },
  {
    path: "addons",
    /*name: "addons",  Deleted because shot a warning */
    component: () => import("@/shared/addons")
  },
  {
    path: "add-sounds",
    component: () => import("@/shared/add-sounds")
  },
  {
    path: "add-scents",
    component: () => import("@/shared/add-scents")
  },
  {
    path: "add-products",
    component: () => import("@/shared/add-products")
  },
  {
    path: "payment",
    name: "PaymentMemeez",
    component: () => import("@/views/design-platform/memeez/PaymentMemeez")
  },
  {
    path: "congrats",
    name: "CongratsMemeez",
    component: () => import("@/views/design-platform/memeez/CongratsMemeez")
  }
]
