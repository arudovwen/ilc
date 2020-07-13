const Home = () =>
    import(/* webpackChunkName: "home_routes" */ "./components/index.vue");
const Auth = () =>
    import(/* webpackChunkName: "home_routes" */ "./components/auth/auth.vue");
const Checkout = () =>
    import(/* webpackChunkName: "home_routes" */ "./components/checkout.vue");
const Summary = () =>
    import(/* webpackChunkName: "home_routes" */ "./components/summary.vue");
const Institute = () =>
    import(
        /* webpackChunkName: "home_routes" */ "./components/institute/createInstitute"
    );

const Data = () =>
    import(/* webpackChunkName: "home_routes" */ "./components/data");

const AdminHome = () =>
    import(/* webpackChunkName: "home_routes" */ "./components/admin/home");

const AdminDashboard = () =>
    import(
        /* webpackChunkName: "home_routes" */ "./components/admin/dashboard"
    );

const AdminAuth = () =>
    import(
        /* webpackChunkName: "home_routes" */ "./components/admin/auth/auth"
    );

const TutorHome = () =>
    import(/* webpackChunkName: "home_routes" */ "./components/tutor/home");

const TutorGroups = () =>
    import(/* webpackChunkName: "home_routes" */ "./components/tutor/groups");

    const TutorGroupChat = () =>
    import(/* webpackChunkName: "home_routes" */ "./components/tutor/chat");

const TutorDashboard = () =>
    import(
        /* webpackChunkName: "home_routes" */ "./components/tutor/dashboard"
    );

const TutorAuth = () =>
    import(
        /* webpackChunkName: "home_routes" */ "./components/tutor/auth/auth"
    );

const AdminTutorCreate = () =>
    import(
        /* webpackChunkName: "home_routes" */ "./components/admin/tutor/create"
    );

const AdminAdd = () =>
    import(/* webpackChunkName: "home_routes" */ "./components/admin/add");

const AdminEdit = () =>
    import(/* webpackChunkName: "home_routes" */ "./components/admin/edit");

const AdminTutorEdit = () =>
    import(
        /* webpackChunkName: "home_routes" */ "./components/admin/tutor/edit"
    );

const AdminTutorView = () =>
    import(
        /* webpackChunkName: "home_routes" */ "./components/admin/tutor/view"
    );

const Classes = () =>
    import(
        /* webpackChunkName: "home_routes" */ "./components/admin/classes/home"
    );
const Courses = () =>
    import(/* webpackChunkName: "home_routes" */ "./components/admin/courses");
const Syllabus = () =>
    import(
        /* webpackChunkName: "home_routes" */ "./components/admin/syllabus/syllabus"
    );
const SyllabusHome = () =>
    import(
        /* webpackChunkName: "home_routes" */ "./components/admin/syllabus/home"
    );
const TimeTable = () =>
    import(
        /* webpackChunkName: "home_routes" */ "./components/admin/timeTable/timeTable"
    );
const TimeTableHome = () =>
    import(
        /* webpackChunkName: "home_routes" */ "./components/admin/timeTable/home"
    );
const ViewTimeTable = () =>
    import(
        /* webpackChunkName: "home_routes" */ "./components/admin/timeTable/view"
    );

const StudentAuth = () =>
    import(
        /* webpackChunkName: "home_routes" */ "./components/student/auth/auth"
    );
const StudentHome = () =>
    import(/* webpackChunkName: "home_routes" */ "./components/student/home");

const StudentDashboard = () =>
    import(
        /* webpackChunkName: "home_routes" */ "./components/student/dashboard"
    );

const AdminStudentCreate = () =>
    import(
        /* webpackChunkName: "home_routes" */ "./components/admin/student/create"
    );

const AdminStudentEdit = () =>
    import(
        /* webpackChunkName: "home_routes" */ "./components/admin/student/edit"
    );

const AdminStudentView = () =>
    import(
        /* webpackChunkName: "home_routes" */ "./components/admin/student/view"
    );
const Administrators = () =>
    import(
        /* webpackChunkName: "home_routes" */ "./components/admin/adminUsers"
    );
const Students = () =>
    import(
        /* webpackChunkName: "home_routes" */ "./components/admin/student/home"
    );
const Tutors = () =>
    import(
        /* webpackChunkName: "home_routes" */ "./components/admin/tutor/home"
    );
const AssignTutor = () =>
    import(
        /* webpackChunkName: "home_routes" */ "./components/admin/tutor/assign"
    );
const AssignStudent = () =>
    import(
        /* webpackChunkName: "home_routes" */ "./components/admin/student/assign"
    );
const AssignHead = () =>
    import(
        /* webpackChunkName: "home_routes" */ "./components/admin/tutor/assignHead"
    );
const SchoolRegister = () =>
    import(
        /* webpackChunkName: "home_routes" */ "./components/school/register"
    );

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
    { path: "/summary", component: Summary, name: "Summary" },
    { path: "/checkout", component: Checkout, name: "Checkout" },
    { path: "/data", component: Data, name: "Data" },
    {
        path: "/school/register",
        component: SchoolRegister,
        name: "SchoolRegister"
    },
    {
        path: "/admin/auth/:type",
        component: AdminAuth,
        name: "AdminAuth",
        beforeEnter: (to, from, next) => {
            var admin = JSON.parse(localStorage.getItem("typeAdmin"));
            if (admin == null) {
                next();
            } else {
                next({ name: "AdminDashboard" });
            }
        }
    },
    {
        path: "/admin",
        component: AdminDashboard,
        children: [
            {
                path: "",
                name: "AdminHome",
                component: AdminHome,
                meta: {
                    typeAdmin: true
                }
            },
            {
                path: "add",
                name: "AdminAdd",
                component: AdminAdd,
                meta: {
                    typeAdmin: true
                }
            },
            {
                path: "edit/:id",
                name: "AdminEdit",
                component: AdminEdit,
                meta: {
                    typeAdmin: true
                }
            },
            {
                path: "tutor/edit/:id",
                component: AdminTutorEdit,
                name: "AdminTutorEdit",
                meta: {
                    typeAdmin: true
                }
            },
            {
                path: "tutor/create",
                component: AdminTutorCreate,
                name: "AdminTutorCreate",
                meta: {
                    typeAdmin: true
                }
            },
            {
                path: "tutor/view/:id",
                component: AdminTutorView,
                name: "AdminTutorView",
                meta: {
                    typeAdmin: true
                }
            },
            {
                path: "student/edit/:id",
                component: AdminStudentEdit,
                name: "AdminStudentEdit",
                meta: {
                    typeAdmin: true
                }
            },
            {
                path: "student/create",
                component: AdminStudentCreate,
                name: "AdminStudentCreate",
                meta: {
                    typeAdmin: true
                }
            },
            {
                path: "student/view/:id",
                component: AdminStudentView,
                name: "AdminStudentView",
                meta: {
                    typeAdmin: true
                }
            },
            {
                path: "administrators",
                component: Administrators,
                name: "Administrators",
                meta: {
                    typeAdmin: true
                }
            },
            {
                path: "students",
                component: Students,
                name: "Students",
                meta: {
                    typeAdmin: true
                }
            },
            {
                path: "tutors",
                component: Tutors,
                name: "Tutors",
                meta: {
                    typeAdmin: true
                }
            },
            {
                path: "courses",
                component: Courses,
                name: "Courses",
                meta: {
                    typeAdmin: true
                }
            },
            {
                path: "syllabus",
                component: Syllabus,
                name: "Syllabus",
                meta: {
                    typeAdmin: true
                }
            },
            {
                path: "time-table",
                component: TimeTable,
                name: "TimeTable",
                meta: {
                    typeAdmin: true
                }
            },
            {
                path: "syllabus/home",
                component: SyllabusHome,
                name: "SyllabusHome",
                meta: {
                    typeAdmin: true
                }
            },
            {
                path: "time-table/home",
                component: TimeTableHome,
                name: "TimeTableHome",
                meta: {
                    typeAdmin: true
                }
            },
            {
                path: "time-table/view/:id",
                component: ViewTimeTable,
                name: "ViewTimeTable",
                meta: {
                    typeAdmin: true
                }
            },
            {
                path: "classes/years",
                component: Classes,
                name: "Classes",
                meta: {
                    typeAdmin: true
                }
            },
            {
                path: "tutor/assign",
                component: AssignTutor,
                name: "AssignTutor",
                meta: {
                    typeAdmin: true
                }
            },
            {
                path: "student/assign",
                component: AssignStudent,
                name: "AssignStudent",
                meta: {
                    typeAdmin: true
                }
            },
            {
                path: "head/assign",
                component: AssignHead,
                name: "AssignHead",
                meta: {
                    typeAdmin: true
                }
            }
        ]
    },

    {
        path: "/tutor/auth/:type",
        component: TutorAuth,
        name: "TutorAuth",
        beforeEnter: (to, from, next) => {
            var tutor = JSON.parse(localStorage.getItem("typeTutor"));
            if (tutor == null) {
                next();
            } else {
                next({ name: "TutorDashboard" });
            }
        }
    },
    {
        path: "/tutor",
        component: TutorDashboard,

        children: [
            {
                path: "",
                component: TutorHome,
                name: "TutorHome",
                meta: {
                    typeTutor: true
                }
            },
            {
                path: "groups",
                component: TutorGroups,
                name: "TutorGroups",
                meta: {
                    typeTutor: true
                }
            },
            {
                path: "group/:id",
                component: TutorGroupChat,
                name: "TutorGroupChat",
                meta: {
                    typeTutor: true
                }
            }
        ]
    },

    {
        path: "/student/auth/:type",
        component: StudentAuth,
        name: "StudentAuth",
        beforeEnter: (to, from, next) => {
            var student = JSON.parse(localStorage.getItem("typeStudent"));
            if (student == null) {
                next();
            } else {
                next({ name: "StudentDashboard" });
            }
        }
    },

    {
        path: "/student",
        component: StudentDashboard,
        children: [
            {
                path: "",
                component: StudentHome,
                name: "StudentHome",
                meta: {
                    typeStudent: true
                }
            }
        ]
    }
];
