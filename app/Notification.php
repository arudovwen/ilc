<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Notification extends Model
{
    protected $fillable = ['school_id','receiver_id','message','status','role','sender_id'];
    public function users()
    {
        return $this->hasMany(User::class)->latest();
    }
}
