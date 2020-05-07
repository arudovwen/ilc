<?php

namespace App\Http\Controllers;

use App\Tutor;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class TutorController extends Controller
{
   public function register(Request $request){
    return Tutor::create([
        'name' => $request['name'],
        'email' => $request['email'],
        'password' => Hash::make($request['password']),
        'mat_no' => $request['id_no'],
        'phone' => $request['phone'],
        'gender' => $request['email'],
        'level_of_edu' => $request['level_of_edu'],
        'school' => $request['school'],
        'faculty' => $request['faculty'],
        'department' => $request['department'],
        'course_level'=> $request['course_level']
    ]);
   }
}
