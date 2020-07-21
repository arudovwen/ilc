<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ClassStudent extends Model
{
    protected $table = 'class_students';
    protected $fillable = ['school_id','my_class','students'];
}
