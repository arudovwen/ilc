<?php

namespace App;

use Laravel\Passport\HasApiTokens;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Admin  extends Authenticatable
{
    use HasApiTokens, Notifiable;

    protected $table = 'admins';
    protected $fillable = ['name','email','address','school_id','role','password'];

    public function school(){
        return $this->belongsTo(School::class);
    }
}
