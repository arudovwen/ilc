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
Route::middleware('auth:tutor_api')->get('/tutor', function (Request $request) {
    return $request->tutor();
});
Route::post('register', 'Auth\RegisterController@register');

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

Route::post('register-tutor', 'TutorController@addCourseLevel');
