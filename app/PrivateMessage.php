<?php

namespace App;

use App\User;
use App\Tutor;
use Illuminate\Database\Eloquent\Model;

class PrivateMessage extends Model
{

    protected $fillable = ['user_id','receiver_id','message','attachment'];
    public function tutor(){
        return $this->belongsTo(Tutor::class);
    }
    public function user(){
        return $this->belongsTo(User::class);
    }
}
