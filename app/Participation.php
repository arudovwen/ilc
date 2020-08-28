<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Participation extends Model
{

    protected $fillable = ['school_id','user_id','tutor','subject','score','date','day'];
}
