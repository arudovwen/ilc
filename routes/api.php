<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::middleware('auth:tutor')->get('/tutorDetails', 'TutorController@tutorDetail');

Route::middleware('auth:admin')->get('/adminDetails', 'AdminController@adminDetail');

Route::resource('school', 'SchoolController');
Route::get('lga', 'SchoolController@getLga');
Route::post('add-school', 'Auth\RegisterController@addSchool');

Route::post('add-faculty', 'Auth\RegisterController@addFaculty');

Route::post('add-dept', 'Auth\RegisterController@addDept');

Route::post('add-edulevel', 'Auth\RegisterController@addEducationLevel');
Route::post('add-level', 'Auth\RegisterController@addCourseLevel');

Route::get('get-schools', 'GeneralController@getSchool');

Route::get('get-faculties', 'GeneralController@getFaculty');

Route::get('get-dept', 'GeneralController@getDept');

Route::get('get-edulevel', 'GeneralController@getEducationLevel');
Route::get('get-level', 'GeneralController@getCourseLevel');



Route::middleware('auth:api')->group(function () {
    Route::get('student-group/{id}', 'GroupsController@getStudentGroup');
    Route::get('student-group', 'GroupsController@getStudentGroups');
    Route::get('get-student-messages/{groupId}', 'MessagesController@getStudentMessages');
    Route::post('send-student-message', 'MessagesController@sendStudentGroupMessage');
    Route::get('get-user', 'UserController@getUser');
    Route::resource('user', 'UserController');
    Route::resource('library', 'LibraryController');
    Route::get('user-notifications/{id}', 'NotificationController@show');
    Route::get('clear-user-notifications/{id}', 'NotificationController@updateStatus');

    Route::get('student-resources', 'ResourceController@getResources');
    Route::get('student-resource/{id}', 'ResourceController@show');

    Route::get('student-assessments/{id}', 'AssessmentController@getAssessments');
    Route::get('student-assessment/{id}', 'AssessmentController@getSingleAssessment');
    Route::get('student-assessment-type/{id}', 'AssessmentController@getAssessmentType');
    Route::post('check-assessment', 'AssessmentResultController@checkAssessment');
    Route::resource('student-grade-book', 'GradeBookController');
    Route::post('student-assessment-result', 'AssessmentResultController@store');
    Route::get('get-assessment-result', 'AssessmentResultController@getResult');
    Route::get('student-all-subjects', 'SubjectsController@getAllSubjectsForStudent');
    Route::get('student-times-table/{id}', 'TimesTableController@getTimesTablePerClass');
    Route::resource('rating', 'CourseReviewController');
    Route::resource('note', 'NoteController');
    Route::get('todays-class/{class}','TimesTableController@getCurrentTimesTable');

    Route::get('private-message','PrivateMessageController@fetchMessages');
    Route::post('private-message','PrivateMessageController@sendMessage');
    Route::get('classmates', 'ClassesController@getClassmates');
    Route::get('allmessages', 'MessagesController@getGroupChat');

    Route::get('student-attendance', 'AttendanceController@getStudentAttendance');
   
    Route::get('student-live', 'LiveClassesController@getMyLive');
    Route::get('student-part', 'ParticipationController@studpart');
    Route::get('student-sorted-attendance', 'AttendanceController@getStudentAttendance');
});

Route::middleware('auth:tutor')->group(function () {
   
    Route::get('sorted-student-attendance', 'AttendanceController@getsortedStudentAttendance');
    Route::get('tutormessages', 'MessagesController@getTutorChat');
    Route::get('tutor-note', 'NoteController@tutorNote');
    Route::post('tutor-note', 'NoteController@storeTutorNote');
    Route::resource('group', 'GroupsController');
    Route::resource('tutor-schedule', 'TutorScheduleController');
    Route::get('tutor-rating/{id}', 'CourseReviewController@tutorRatings');
    Route::post('multi-group-drop', 'GroupsController@multiDrop');
    Route::get('get-messages/{groupId}', 'MessagesController@getMessages');
    Route::post('send-message', 'MessagesController@sendGroupMessage');
    Route::resource('tutors', 'TutorController');
    Route::resource('resource', 'ResourceController');
    Route::get('tutor-syllabus', 'SyllabusController@getTutorSyllabuses');
    Route::get('tutor-module/{myclass}/{subject}', 'SyllabusController@getTutorModules');
    Route::get('tutor-curriculum', 'CurriculumController@getTutorCurriculums');
    Route::get('tutor-syllabus/{id}', 'SyllabusController@getTutorSyllabus');
    Route::get('tutor-curriculum/{id}', 'CurriculumController@getTutorCurriculum');
    Route::get('all-classes', 'ClassesController@getAllTutorClasses');
    Route::get('all-students/{name}', 'UserController@tutorGetStudents');
    Route::get('tutor-notifications/{id}', 'NotificationController@showTutorNotifications');
    Route::get('tutor-all-subjects', 'SubjectsController@tutorGetAllSubjects');
    Route::get('clear-tutor-notifications/{id}', 'NotificationController@updateTutorStatus');
    Route::get('tutor-times-table/{id}', 'TimesTableController@show');
    Route::get('tutor-times-table', 'TimesTableController@indexTutor');
    Route::resource('assessment', 'AssessmentController');
    Route::post('draft-assessment', 'AssessmentController@saveDraft');
    Route::get('draft-assessment', 'AssessmentController@getDraft');
    Route::put('publish-assessment/{id}', 'AssessmentController@publish');
    Route::resource('assessment-result', 'AssessmentResultController');
    Route::put('approve-assessment-result/{id}', 'AssessmentResultController@ApproveAssessment');
    Route::post('draft-result', 'AssessmentResultController@draftResult');
    Route::post('tutor-grade-book', 'GradeBookController@getBooks');
    Route::get('tutor-grade-books', 'GradeBookController@index');
    Route::get('current-class','TimesTableController@getCurrentClass');
    Route::get('all-class','TimesTableController@getAllClass');
    Route::get('staff-message', 'StaffChatController@fetchMessages');
    Route::post('staff-message', 'StaffChatController@sendMessage');
    Route::get('get-tutor-assessment', 'AssessmentResultController@getTutorResult');
    Route::get('students/{class}', 'ClassesController@getStudents');
    Route::get('tutor-live', 'LiveClassesController@getTutorMyLive');
    Route::get('tutor-attendance', 'AttendanceController@getAttendance');
    Route::get('tutor-get-attendance', 'AttendanceController@tutorgetAttendance');
    Route::get('tutor-all-students', 'UserController@tutorGetStudents');
    Route::put('update-attendance/{id}', 'AttendanceController@updateAttendance');
    Route::post('create-attendance', 'AttendanceController@createAttendance');
    Route::resource('participation', 'ParticipationController');
});

Route::get('student-group/{id}', 'GroupsController@show');
Route::post('school-register', 'SchoolController@store');
Route::get('get-module/{name}/{level}/{school}', 'ResourceController@getModuleResource');
Route::get('get-modules/{level}/{school}', 'ResourceController@getModules');

Route::middleware('auth:admin')->group(function () {
    Route::resource('admin', 'AdminController');
    Route::get('admin-notifications/{id}', 'NotificationController@showAdminNotifications');
    Route::get('clear-admin-notifications/{id}', 'NotificationController@updateAdminStatus');
    Route::post('multi-admin-drop', 'AdminController@multiDrop');
    Route::post('multi-tutor-drop', 'TutorController@multiDrop');
    Route::post('multi-student-drop', 'UserController@multiDrop');
    Route::post('multi-subject-drop', 'SubjectsController@multiDrop');
    Route::post('multi-syllabus-drop', 'SyllabusController@multiDrop');
    Route::post('multi-classes-drop', 'ClassesController@multiDrop');
   
    Route::resource('class-student', 'ClassStudentsController');
    Route::resource('tutor', 'TutorController');
    Route::resource('student', 'UserController');
    Route::get('admin-get-students', 'UserController@adminGetStudents');
    Route::resource('subject', 'SubjectsController');
    Route::resource('syllabus', 'SyllabusController');
    Route::resource('curriculum', 'CurriculumController');
    Route::resource('times-table', 'TimesTableController');
    Route::resource('classes', 'ClassesController');
    Route::resource('tutor-course', 'CourseTutorController');
    Route::resource('tutor-class', 'ClassTeachersController');
    Route::post('register', 'Auth\RegisterController@register');
    Route::get('admin-get-user/{id}', 'UserController@adminGetUser');
    Route::put('update-user/{id}', 'UserController@store');
    Route::resource('students-course', 'CourseStudentsController');
    Route::get('admin-assessments', 'AssessmentController@getAdminAssessments');
    Route::get('admin-get-assessment/{id}', 'AssessmentController@getAdminAssessment');
    Route::put('admin-verify-assessment/{id}', 'AssessmentController@verifyAssessment');
    Route::delete('admin-drop-assessment/{id}', 'AssessmentController@destroy');
   
   
});
Route::resource('order', 'OrdersController');
Route::resource('temp-sub', 'TempSubscriptionsController');
Route::resource('package', 'PackagesController');
Route::get('verify/{ref}', 'SubscriptionsController@verify');

Route::resource('attendance', 'AttendanceController');
Route::put('live-class/{id}', 'LiveClassesController@update');
Route::get('make-live-class', 'LiveClassesController@makeLiveClass');
Route::get('get-live-class', 'LiveClassesController@adminGetLiveClass');

Route::post('mark-student', 'AttendanceController@tutorMarking');
Route::post('live-student', 'AttendanceController@tutorMarking');
