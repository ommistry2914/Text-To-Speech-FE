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

export const temRoute = [ 
    {
        title:"Home",
        url: "/",
    },
    {
        title:"Setting",
        url:"/Setting",
    }
]