<?php

namespace App;

use App\User;
use App\Tutor;
use Illuminate\Database\Eloquent\Model;

class School extends Model
{
    protected $table ='school';
protected $fillable = ['school','abbrevation'];


    public function user()
    {
        return $this->hasMany(User::class);
    }
    public function tutor()
    {
        return $this->hasMany(Tutor::class);
    }
}
