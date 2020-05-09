let Home = () =>
    import(/* webpackChunkName: "home_routes" */ "./components/index.vue");
let Auth = () =>
    import(/* webpackChunkName: "home_routes" */ "./components/auth/auth.vue");
let Institute = () =>
    import(
        /* webpackChunkName: "home_routes" */ "./components/institute/createInstitute"
    );

let Data = () =>
    import(/* webpackChunkName: "home_routes" */ "./components/data");

export const routes = [
    { path: "*", redirect: "/" },
    {
        path: "/",
        component: Home,
        name: "Home",
        children: []
    },
    {
        path: "/auth",
        component: Auth,
        name: "Auth",
        beforeEnter: (to, from, next) => {
            var user = localStorage.getItem("myUser");
            if (user == null) {
                next();
            } else {
                next("/");
            }
        }
    },
    { path: "/create/institute", component: Institute, name: "Institute" },
    { path: "/data", component: Data, name: "Data" }
];
