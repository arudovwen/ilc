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

const SubscribeInstitute = () =>
    import(
        /* webpackChunkName: "home_routes" */ "./components/school/subscribe"
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

const TutorSyllabus = () =>
    import(/* webpackChunkName: "home_routes" */ "./components/tutor/syllabus");
const TutorCurriculum = () =>
    import(/* webpackChunkName: "home_routes" */ "./components/tutor/curriculum");
const Attendance = () =>
    import(/* webpackChunkName: "home_routes" */ "./components/tutor/attendance");

const TutorSyllabusView = () =>
    import(
        /* webpackChunkName: "home_routes" */ "./components/tutor/viewSyllabus"
    );

const TutorCurriculumView = () =>
    import(
        /* webpackChunkName: "home_routes" */ "./components/tutor/viewCurriculum"
    );

const TutorDashboard = () =>
    import(
        /* webpackChunkName: "home_routes" */ "./components/tutor/dashboard"
    );

const TutorAuth = () =>
    import(
        /* webpackChunkName: "home_routes" */ "./components/tutor/auth/auth"
    );

const TutorProfile = () =>
    import(/* webpackChunkName: "home_routes" */ "./components/tutor/profile");

const StudentProfile = () =>
    import(
        /* webpackChunkName: "home_routes" */ "./components/student/profile"
    );

const AdminTutorCreate = () =>
    import(
        /* webpackChunkName: "home_routes" */ "./components/admin/tutor/create"
    );

const AdminTutorUpdate = () =>
    import(
        /* webpackChunkName: "home_routes" */ "./components/admin/tutor/update"
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
const SyllabusView = () =>
    import(
        /* webpackChunkName: "home_routes" */ "./components/admin/syllabus/view"
    );
const SyllabusEdit = () =>
    import(
        /* webpackChunkName: "home_routes" */ "./components/admin/syllabus/edit"
    );
const SyllabusHome = () =>
    import(
        /* webpackChunkName: "home_routes" */ "./components/admin/syllabus/home"
    );

const Curriculum = () =>
    import(
        /* webpackChunkName: "home_routes" */ "./components/admin/curriculum/home"
    );
const CurriculumView = () =>
    import(
        /* webpackChunkName: "home_routes" */ "./components/admin/curriculum/view"
    );
const CurriculumEdit = () =>
    import(
        /* webpackChunkName: "home_routes" */ "./components/admin/curriculum/edit"
    );
const CurriculumCreate = () =>
    import(
        /* webpackChunkName: "home_routes" */ "./components/admin/curriculum/create"
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
    const EditTimeTable = () =>
    import(
        /* webpackChunkName: "home_routes" */ "./components/admin/timeTable/edit"
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

const StudentGroups = () =>
    import(/* webpackChunkName: "home_routes" */ "./components/student/groups");

const StudentGroupChat = () =>
    import(/* webpackChunkName: "home_routes" */ "./components/student/chat");

const AdminStudentCreate = () =>
    import(
        /* webpackChunkName: "home_routes" */ "./components/admin/student/create"
    );
const AdminStudentUpdate = () =>
    import(
        /* webpackChunkName: "home_routes" */ "./components/admin/student/update"
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
const StudentUpdate = () =>
    import(/* webpackChunkName: "home_routes" */ "./components/student/update");
const Explore = () =>
    import(
        /* webpackChunkName: "home_routes" */ "./components/student/explore"
    );
const ViewResource = () =>
    import(
        /* webpackChunkName: "home_routes" */ "./components/student/viewResource"
    );
const Library = () =>
    import(
        /* webpackChunkName: "home_routes" */ "./components/student/library"
    );
const Study = () =>
    import(/* webpackChunkName: "home_routes" */ "./components/student/study");
const Tutors = () =>
    import(
        /* webpackChunkName: "home_routes" */ "./components/admin/tutor/home"
    );
const TutorUpdate = () =>
    import(/* webpackChunkName: "home_routes" */ "./components/tutor/update");
const AssignTutor = () =>
    import(
        /* webpackChunkName: "home_routes" */ "./components/admin/tutor/assign"
    );
const AssignStudent = () =>
    import(
        /* webpackChunkName: "home_routes" */ "./components/admin/student/assign"
    );
const AssignStudentClass = () =>
    import(
        /* webpackChunkName: "home_routes" */ "./components/admin/student/assignLevel"
    );
const AssignHead = () =>
    import(
        /* webpackChunkName: "home_routes" */ "./components/admin/tutor/assignHead"
    );
const SchoolRegister = () =>
    import(
        /* webpackChunkName: "home_routes" */ "./components/school/register"
    );

const ResourcesHome = () =>
    import(
        /* webpackChunkName: "home_routes" */ "./components/tutor/resources/home"
    );
const ResourcesCreate = () =>
    import(
        /* webpackChunkName: "home_routes" */ "./components/tutor/resources/create"
    );
const ResourcesEdit = () =>
    import(
        /* webpackChunkName: "home_routes" */ "./components/tutor/resources/edit"
    );
const ResourcesView = () =>
    import(
        /* webpackChunkName: "home_routes" */ "./components/tutor/resources/view"
    );
const TimesTableTutor = () =>
    import(/* webpackChunkName: "home_routes" */ "./components/tutor/times");

const StudentGradebook = () =>
    import(
        /* webpackChunkName: "home_routes" */ "./components/student/gradeBook.vue"
    );

const AssessmentHome = () =>
    import(
        /* webpackChunkName: "home_routes" */ "./components/tutor/assessment/home.vue"
    );

const AssessmentType = () =>
    import(
        /* webpackChunkName: "home_routes" */ "./components/tutor/assessment/create.vue"
    );

const Quiz = () =>
    import(
        /* webpackChunkName: "home_routes" */ "./components/tutor/assessment/quiz.vue"
    );

const Examination = () =>
    import(
        /* webpackChunkName: "home_routes" */ "./components/tutor/assessment/exam.vue"
    );

const Test = () =>
    import(
        /* webpackChunkName: "home_routes" */ "./components/tutor/assessment/test.vue"
    );

const Assignment = () =>
    import(
        /* webpackChunkName: "home_routes" */ "./components/tutor/assessment/assignment.vue"
    );

const AssessmentForm = () =>
    import(
        /* webpackChunkName: "home_routes" */ "./components/tutor/assessment/assessmentform.vue"
    );

const StudentAssessmentHome = () =>
    import(
        /* webpackChunkName: "home_routes" */ "./components/student/assessment/home.vue"
    );

const StudentQuiz = () =>
    import(
        /* webpackChunkName: "home_routes" */ "./components/student/assessment/quiz.vue"
    );

const StudentExamination = () =>
    import(
        /* webpackChunkName: "home_routes" */ "./components/student/assessment/exam.vue"
    );

const StudentTest = () =>
    import(
        /* webpackChunkName: "home_routes" */ "./components/student/assessment/test.vue"
    );

const StudentAssignment = () =>
    import(
        /* webpackChunkName: "home_routes" */ "./components/student/assessment/assignment.vue"
    );
const StudentAssessmentView = () =>
    import(
        /* webpackChunkName: "home_routes" */ "./components/student/assessment/view.vue"
    );

const AdminAssessmentHome = () =>
    import(
        /* webpackChunkName: "home_routes" */ "./components/admin/assessment/home.vue"
    );

const AdminQuiz = () =>
    import(
        /* webpackChunkName: "home_routes" */ "./components/admin/assessment/quiz.vue"
    );

const AdminExamination = () =>
    import(
        /* webpackChunkName: "home_routes" */ "./components/admin/assessment/exam.vue"
    );

const AdminTest = () =>
    import(
        /* webpackChunkName: "home_routes" */ "./components/admin/assessment/test.vue"
    );

const AdminAssignment = () =>
    import(
        /* webpackChunkName: "home_routes" */ "./components/admin/assessment/assignment.vue"
    );

const AdminAssessmentView = () =>
    import(
        /* webpackChunkName: "home_routes" */ "./components/admin/assessment/view.vue"
    );

const GradeBook = () =>
    import(
        /* webpackChunkName: "home_routes" */ "./components/tutor/gradebook/home.vue"
    );

const ViewGradeBook = () =>
    import(
        /* webpackChunkName: "home_routes" */ "./components/tutor/gradebook/view.vue"
    );
    const TutorActivities = () =>
    import(
        /* webpackChunkName: "home_routes" */ "./components/tutor/activities.vue"
    );
     const StudentActivities = () =>
   
    import(
        /* webpackChunkName: "home_routes" */ "./components/student/activities.vue"
    );

const Administrative = () =>
    import(
        /* webpackChunkName: "home_routes" */ "./components/tutor/administrative/home.vue"
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
            var user = localStorage.getItem("typeStudent");
            var tutor = localStorage.getItem("typeTutor");
            if (user == null) {
                next();
            } else {
                next("/student");
            }

            if (tutor == null) {
                next();
            } else {
                next("/tutor");
            }
        }
    },
    { path: "/create/institute", component: Institute, name: "Institute" },
    {
        path: "/subscribe/institute",
        component: SubscribeInstitute,
        name: "SubscribeInstitute"
    },
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
                path: "curriculum/home",
                component: Curriculum,
                name: "Curriculum",
                meta: {
                    typeAdmin: true
                }
            },
            {
                path: "curriculum/view/:id",
                component: CurriculumView,
                name: "CurriculumView",
                meta: {
                    typeAdmin: true
                }
            },
            {
                path: "curriculum/edit/:id",
                component: CurriculumEdit,
                name: "CurriculumEdit",
                meta: {
                    typeAdmin: true
                }
            },
            {
                path: "curriculum/create",
                component: CurriculumCreate,
                name: "CurriculumCreate",
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
                path: "syllabus/view/:id",
                component: SyllabusView,
                name: "SyllabusView",
                meta: {
                    typeAdmin: true
                }
            },
            {
                path: "syllabus/edit/:id",
                component: SyllabusEdit,
                name: "SyllabusEdit",
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
                path: "time-table/edit/:id",
                component: EditTimeTable,
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
                path: "student/update/:id",
                component: AdminStudentUpdate,
                name: "AdminStudentUpdate",
                meta: {
                    typeAdmin: true
                }
            },
            {
                path: "tutor/update/:id",
                component: AdminTutorUpdate,
                name: "AdminTutorUpdate",
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
            },
            {
                path: "student/assign/class",
                component: AssignStudentClass,
                name: "AssignStudentClass",
                meta: {
                    typeAdmin: true
                }
            },
            {
                path: "assessment",
                component: AdminAssessmentHome,
                name: "AdminAssessmentHome",
                meta: {
                    typeAdmin: true
                }
            },
            {
                path: "quiz",
                component: AdminQuiz,
                name: "AdminQuiz",
                meta: {
                    typeAdmin: true
                }
            },
            {
                path: "exam",
                component: AdminExamination,
                name: "AdminExamination",
                meta: {
                    typeAdmin: true
                }
            },
            {
                path: "test",
                component: AdminTest,
                name: "AdminTest",
                meta: {
                    typeAdmin: true
                }
            },
            {
                path: "assignment",
                component: AdminAssignment,
                name: "AdminAssignment",
                meta: {
                    typeAdmin: true
                }
            },
            {
                path: "assessment/view/:id",
                component: AdminAssessmentView,
                name: "AdminAssessmentView",
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
                path: "administrative",
                component: Administrative,
                name: "Administrative",
                meta: {
                    typeTutor: true
                }
            },
            {
                path: "update/:id",
                component: TutorUpdate,
                name: "TutorUpdate",
                meta: {
                    typeTutor: true
                }
            },
            {
                path: "profile",
                component: TutorProfile,
                name: "TutorProfile",
                meta: {
                    typeTutor: true
                }
            },
            {
                path: "attendance",
                component: Attendance,
                name: "Attendance",
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
            },
            {
                path: "curriculum/view/:id",
                component: TutorCurriculumView,
                name: "TutorCurriculumView",
                meta: {
                    typeTutor: true
                }
            },
            {
                path: "syllabus/view/:id",
                component: TutorSyllabusView,
                name: "TutorSyllabusView",
                meta: {
                    typeTutor: true
                }
            },
            {
                path: "syllabus",
                component: TutorSyllabus,
                name: "TutorSyllabus",
                meta: {
                    typeTutor: true
                }
            },
            {
                path: "curriculum",
                component: TutorCurriculum,
                name: "TutorCurriculum",
                meta: {
                    typeTutor: true
                }
            },
            {
                path: "resources",
                component: ResourcesHome,
                name: "ResourcesHome",
                meta: {
                    typeTutor: true
                }
            },
            {
                path: "resource/create",
                component: ResourcesCreate,
                name: "ResourcesCreate",
                meta: {
                    typeTutor: true
                }
            },
            {
                path: "resource/edit/:id",
                component: ResourcesEdit,
                name: "ResourcesEdit",
                meta: {
                    typeTutor: true
                }
            },
            {
                path: "assessment",
                component: AssessmentHome,
                name: "AssessmentHome",
                meta: {
                    typeTutor: true
                }
            },
            {
                path: "assessment/create/:type",
                component: AssessmentType,
                name: "AssessmentType",
                meta: {
                    typeTutor: true
                }
            },
            {
                path: "assessmentform",
                component: AssessmentForm,
                name: "AssessmentForm",
                meta: {
                    typeTutor: true
                }
            },
            {
                path: "quiz",
                component: Quiz,
                name: "Quiz",
                meta: {
                    typeTutor: true
                }
            },
            {
                path: "exam",
                component: Examination,
                name: "Examination",
                meta: {
                    typeTutor: true
                }
            },
            {
                path: "test",
                component: Test,
                name: "Test",
                meta: {
                    typeTutor: true
                }
            },
            {
                path: "assignment",
                component: Assignment,
                name: "Assignment",
                meta: {
                    typeTutor: true
                }
            },

            {
                path: "times-table",
                component: TimesTableTutor,
                name: "TimesTableTutor",
                meta: {
                    typeTutor: true
                }
            },
            {
                path: "resource/view/:id",
                component: ResourcesView,
                name: "ResourcesView",
                meta: {
                    typeTutor: true
                }
            },
            {
                path: "gradebook",
                component: GradeBook,
                name: "GradeBook",
                meta: {
                    typeTutor: true
                }
            },
            {
                path:"activities",
                component:TutorActivities,
                name:'TutorActivities',
                meta:{
                    typeTutor: true
                }
            },
            {
                path: "gradebook/view/:subject/:id",
                component: ViewGradeBook,
                name: "ViewGradeBook",
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
            },
            {
                path: "explore",
                component: Explore,
                name: "Explore",
                meta: {
                    typeStudent: true
                }
            },
            {
                path: "resource/view/:id",
                component: ViewResource,
                name: "ViewResource",
                meta: {
                    typeStudent: true
                }
            },
            {
                path: "library",
                component: Library,
                name: "Library",
                meta: {
                    typeStudent: true
                }
            },
            {
                path: "study/:id",
                component: Study,
                name: "Study",
                meta: {
                    typeStudent: true
                }
            },
            {
                path: "update",
                component: StudentUpdate,
                name: "StudentUpdate",
                meta: {
                    typeStudent: true
                }
            },
            {
                path: "profile",
                component: StudentProfile,
                name: "StudentProfile",
                meta: {
                    typeStudent: true
                }
            },
            {
                path:"gradebook",
                component:StudentGradebook,
                name:'StudentGradebook',
                meta:{
                    typeStudent: true
                }
            },
            {
                path:"activities",
                component:StudentActivities,
                name:'StudentActivities',
                meta:{
                    typeStudent: true
                }
            },
            {
                path: "groups",
                component: StudentGroups,
                name: "StudentGroups",
                meta: {
                    typeStudent: true
                }
            },
            {
                path: "group/:id",
                component: StudentGroupChat,
                name: "StudentGroupChat",
                meta: {
                    typeStudent: true
                }
            },
            {
                path: "assessment",
                component: StudentAssessmentHome,
                name: "StudentAssessmentHome",
                meta: {
                    typeStudent: true
                }
            },
            {
                path: "quiz",
                component: StudentQuiz,
                name: "StudentQuiz",
                meta: {
                    typeStudent: true
                }
            },
            {
                path: "exam",
                component: StudentExamination,
                name: "StudentExamination",
                meta: {
                    typeStudent: true
                }
            },
            {
                path: "test",
                component: StudentTest,
                name: "StudentTest",
                meta: {
                    typeStudent: true
                }
            },
            {
                path: "assignment",
                component: StudentAssignment,
                name: "StudentAssignment",
                meta: {
                    typeStudent: true
                }
            },
            {
                path: "assessment/view/:id",
                component: StudentAssessmentView,
                name: "StudentAssessmentView",
                meta: {
                    typeStudent: true
                }
            }
        ]
    }
];
