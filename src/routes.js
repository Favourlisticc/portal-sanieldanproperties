import React from "react";

// dashboard Imports
import Teammate from "./dashboard/others/teammates"
import Referrallink from "./dashboard/others/refferrallink"
import Productsdetails from "./dashboard/others/productsdetails"
import Payoutdetails from "./dashboard/others/payoutdetails"
import Profile from "./dashboard/others/profile"
import Maindashboard from "./dashboard/others/main"



// Icon Imports
import {
  MdHome,
  MdOutlineShoppingCart,
  MdBarChart,
  MdPerson,
} from "react-icons/md";

const routes = [
  {
    name: "Main Dashboard",
    layout: "/dashboard",
    path: "main",
    icon: <MdHome className="h-6 w-6" />,
    component: <Maindashboard />,
  },
  {
    name: "Team Mates",
    layout: "/dashboard",
    path: "team-mate",
    icon: <MdOutlineShoppingCart className="h-6 w-6" />,
    component: <Teammate />,
    secondary: true,

  },
  {
    name: "Referral Link",
    layout: "/dashboard",
    icon: <MdBarChart className="h-6 w-6" />,
    path: "referrallink",
    component: <Referrallink />,
  },
  {
    name: "Payout Details",
    layout: "/dashboard",
    path: "payout-details",
    icon: <MdPerson className="h-6 w-6" />,
    component: <Payoutdetails />,
  },
  {
    name: "Products Details",
    layout: "/dashboard",
    path: "products-details",
    icon: <MdPerson className="h-6 w-6" />,
    component: <Productsdetails />,
  },
  {
    name: "Profile",
    layout: "/dashboard",
    path: "profile",
    icon: <MdPerson className="h-6 w-6" />,
    component: <Profile />,
  },
];
export default routes;
