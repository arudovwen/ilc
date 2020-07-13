<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ClassStudent extends Model
{
    protected $table = 'class_student';
    protected $fillable = ['school_id','student_id','class_id'];
}
