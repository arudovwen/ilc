<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Assessment extends Model
{
    protected $fillable = ['school_id','tutor_id','session','subject','type','duration','assessment','status','title','level'];
}
