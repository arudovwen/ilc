<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class GradeBook extends Model
{
    protected $table = 'grade_books';
    protected $fillable = ['school_id','user_id','level','subject','type','title','record'];
}
