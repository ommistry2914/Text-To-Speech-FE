export const routes = [
  {
    title: "Home",
    url: "/userDashboard",
    allowedRoles: ["user"],
  },
  {
    title: "Home",
    url: "/superDashboard",
    allowedRoles: ["superAdmin"],
  },
  {
    title: "Contact Us",
    url: "/contactUs",
    allowedRoles: ["superAdmin", "user"],
  },
  /* Temporarily commented out - to be used in future
  {
    title: "Setting",
    url: "/setting",
    allowedRoles: ["superAdmin", "user"],
  },
  {
    title: "Super Admin Setting",
    url: "/superAdminSetting",
    allowedRoles: ["superAdmin"],
  },
  {
    title: "User Setting",
    url: "/userSetting",
    allowedRoles: ["user"],
  },
  */
];

export const temRoute = [
  {
    title: "Home",
    url: "/userDashboard",
  },
  /* Temporarily commented out - to be used in future
  {
    title: "Setting",
    url: "/setting",
  },
  */
  {
    title: "Contact Us",
    url: "/contactUs",
  },
];