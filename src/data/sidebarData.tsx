export const routes = [
    {
        title:"Home",
        url: "/",
        allowedRoles: ["superAdmin", "admin"],
    },
    {
        title:"Setting",
        url: "/setting",
        allowedRoles: ["superAdmin"],
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