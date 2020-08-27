<?php

namespace App;

use App\User;
use App\Group;
use App\Tutor;
use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
    protected $fillable = ['school_id', 'user_id','group_id','message','attachment','tutor_id'];



    public function tutor()
    {
        return $this->belongsTo(Tutor::class);
    }
    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function group()
    {
        return $this->belongsTo(Group::class);
    }
}
