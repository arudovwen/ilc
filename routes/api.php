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
});

Route::middleware('auth:tutor')->group(function () {
    Route::resource('group', 'GroupsController');
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
});
Route::get('student-group/{id}', 'GroupsController@show');
Route::post('school-register', 'SchoolController@store');

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
    Route::resource('school', 'SchoolController');
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
});
Route::resource('order', 'OrdersController');
Route::resource('temp-sub', 'TempSubscriptionsController');
Route::resource('package', 'PackagesController');
Route::get('verify/{ref}', 'SubscriptionsController@verify');
