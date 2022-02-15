import Home from "./pages/Home"
import Detail from "./pages/Detail"
import Error from "./pages/Error"
import Followers from "./pages/Followers"

export default [
    {
        path: "/",
        exact: true,
        component: Home,
    },
    {
        path: "/:repo_id",
        exact: true,
        component: Detail,
    },
    {
        path: "/:user_id/followers",
        exact: true,
        component: Followers,
    },
    {
        path: "*",
        component: Error,
    },
]
