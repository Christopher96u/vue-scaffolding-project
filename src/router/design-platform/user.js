
export const USER_ROUTES = [
  {
    path: "address",
    name: "Address",
    component: () => import("@/views/design-platform/user/Address")
  },
  {
    path: "orders",
    name: "Orders",
    component: () => import("@/views/design-platform/user/Orders"),
    children:[
      {
        path: "orderdetail/:orderid",
        name: "OrderDetail",
        component: () => import("@/views/design-platform/user/OrderDetail")
      }
    ]
  },
  {
    path: "projects",
    name: "Projects",
    component: () => import("@/views/design-platform/user/Projects"),
    children: [
      {
        path: "projectdetail/:projectid",
        name: "ProjectDetail",
        component: () => import("@/views/design-platform/user/ProjectDetail")
      }
    ]
  },
  {
    path: "quotes",
    name: "Quotes",
    component: () => import("@/views/design-platform/user/Quotes"),
    children: [
      {
        path: "quotedetail/:quoteid",
        name: "QuoteDetail",
        component: () => import("@/views/design-platform/user/QuoteDetail")
      }
    ]
  },
  {
    path: "wallet",
    name: "Wallet",
    component: ()=> import("@/views/design-platform/user/Wallet")
  }
]
