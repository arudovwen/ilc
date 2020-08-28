<?php

namespace App;

use App\Attendance;
use Illuminate\Database\Eloquent\Model;

class Participation extends Model
{

    protected $fillable = ['school_id','user_id','tutor','subject','score','day'];
    public function attendance()
    {
        return $this->hasOne(Attendance::class);
    }
}
