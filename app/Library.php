<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Library extends Model
{
    protected $fillable = ['school_id','student_id','course_id','excerpt','subject','title','content','worksheet_id','level','progress','cover'];
}
