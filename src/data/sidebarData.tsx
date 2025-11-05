export const routes = [
    {
        title:"Home",
        url: "/",
        allowedRoles: ["super_admin", "admin"],
    },
    {
        title:"Setting",
        url: "/setting",
        allowedRoles: ["super_admin"],
    },
]