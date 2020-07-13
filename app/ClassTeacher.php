<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ClassTeacher extends Model
{
    protected $table = 'class_teacher';
    protected $fillable = ['school_id','tutor_id','class_id'];
}
