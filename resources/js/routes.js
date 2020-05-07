let Home = () =>
    import(
        /* webpackChunkName: "home_routes" */ "./components/index.vue"
    );
    let Auth = () =>
    import(
        /* webpackChunkName: "home_routes" */ "./components/auth/auth.vue"
    );
    let Institute = () =>
    import(
        /* webpackChunkName: "home_routes" */ "./components/institute/createInstitute"
    );


    export const routes = [
        { path: "*", redirect: "/" },
        {
            path: "/",
            component: Home,
            name:'Home',
            children: []
        },
        {path:'/auth', component:Auth,name:'Auth', beforeEnter: (to, from, next) => {
            var user = localStorage.getItem('authUser')
            if (user == null) {
              next()
            }else{
                next('/')
            }
          }},
        {path:'/create/institute', component:Institute, name:'Institute',
       
    }
    ];