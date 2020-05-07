let Home = () =>
    import(
        /* webpackChunkName: "home_routes" */ "./components/index.vue"
    );
    let Auth = () =>
    import(
        /* webpackChunkName: "home_routes" */ "./components/auth/auth.vue"
    );



    export const routes = [
        { path: "*", redirect: "/" },
        {
            path: "/",
            component: Home,
            name:'Home',
            children: []
        },
        {path:'/auth', component:Auth,name:'Auth'}
       
    ];