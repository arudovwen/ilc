<?php

namespace App\Http\Controllers;

use App\School;
use App\Faculty;
use App\Department;
use App\CourseLevel;
use App\EducationLevel;
use Illuminate\Http\Request;


class GeneralController extends Controller
{
    public function  getSchool()
    {
   
      return School::all();
    }
    public function  getFaculty()
    {
        return Faculty::all();
    }
    public function  getDept()
    {
        return Department::all();
    }
    public function  getEducationLevel()
    {
        return EducationLevel::all();
    }
    public function  getCourseLevel()
    {
        return CourseLevel::all();
    }
}
