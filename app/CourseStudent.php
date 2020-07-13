<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CourseStudent extends Model
{
    protected $table = 'courses_student';
    protected $fillable = ['school_id','student_id','courses'];
}
