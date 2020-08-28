<?php

namespace App;

use App\User;
use App\Participation;
use Illuminate\Database\Eloquent\Model;

class Attendance extends Model

{
    protected $fillable = ['school_id','tutor_id','user_id','date','time','day','record','level','subject','score','participation_id','participation_score'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function participation()
    {
        return $this->hasOne(Participation::class);
    }
}
