<?php

namespace App\Http\Controllers\Auth;

use App\User;
use App\School;
use App\Faculty;
use App\Department;
use App\CourseLevel;
use App\EducationLevel;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use App\Providers\RouteServiceProvider;
use Illuminate\Support\Facades\Validator;
use Illuminate\Foundation\Auth\RegistersUsers;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers;

    /**
     * Where to redirect users after registration.
     *
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::HOME;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
 
    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return \App\User
     */

    protected function register(Request $request)
    {
        $valid  =  request()->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:6'],
            
        ]);
    
        if ($request['type']== 'student') {
            return User::create([
                        'name' => $request['name'],
                        'email' => $request['email'],
                        'password' => Hash::make($request['password']),
                        'mat_no' => $request['mat_no'],
                        'phone' => $request['phone'],
                        'gender' => $request['gender'],
                        'level_of_edu' => $request['level_of_edu'],
                        'school' => $request['school'],
                        'faculty' => $request['faculty'],
                        'department' => $request['department'],
                        'course_level'=> $request['course_level']
                    ]);
        }

    
    }
    public function addSchool(Request $request)
    {
     
        foreach ($request->school as $value) {
            School::create([
               'school'=> $value,
            
           ]);
        }
    }
    public function addFaculty(Request $request)
    {
     
        foreach ($request->faculty as $value) {
            Faculty::create([
              'faculty'=> $value,
           
          ]);
        }
    }
    public function addDept(Request $request)
    {
    
        foreach ($request->department as $key => $value) {
           
            
            $dept  = new Department;
            $dept->department = $value;
            $dept->faculty_id = $request->department['faculty'];
            $dept->save();
        }
        
    }
    public function addEducationLevel(Request $request)
    {
       
        foreach ($request->level_of_edu as $value) {
           
            EducationLevel::create([
          'education_level'=> $value,
       
      ]);
        }
    }
    public function addCourseLevel(Request $request)
    {
     
        foreach ($request->course_level as $value) {
            CourseLevel::create([
          'course_level'=> $value,
       
      ]);
        }
    }
}
