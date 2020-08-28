<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TutorSchedule extends Model
{
    protected $table ="tutor_schedule";
    protected $fillable = ['school_id','tutor_id','date','description'];
}
