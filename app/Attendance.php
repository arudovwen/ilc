<?php

namespace App;

use App\User;
use Illuminate\Database\Eloquent\Model;

class Attendance extends Model
{
    protected $fillable = ['school_id','user_id','student_id','date','time','day','record','level'];
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
