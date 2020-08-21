<?php

namespace App;

use App\User;
use App\Tutor;
use Illuminate\Database\Eloquent\Model;

class PrivateMessage extends Model
{

    protected $fillable = ['message','attachment'];
    public function tutor(){
        return $this->belongsTo(Tutor::class);
    }
    public function user(){
        return $this->belongsTo(User::class);
    }
}
