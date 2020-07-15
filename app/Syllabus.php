<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Syllabus extends Model
{
    protected $table = 'syllabus';
    protected $fillable = ['school_id','myclass','syllabus','subject','topic'];
}
