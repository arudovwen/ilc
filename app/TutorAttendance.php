<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TutorAttendance extends Model
{
    protected $fillable = ['school_id','date','time','day','record','level'];
}
