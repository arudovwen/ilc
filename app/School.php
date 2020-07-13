<?php

namespace App;

use App\User;
use App\Tutor;
use Illuminate\Database\Eloquent\Model;

class School extends Model
{
    protected $table ='schools';
protected $fillable = ['schools','abbreviation','email','phone','address','verify'];


    public function user()
    {
        return $this->hasMany(User::class);
    }
    public function tutor()
    {
        return $this->hasMany(Tutor::class);
    }
    public function admin()
    {
        return $this->hasMany(Admin::class);
    }
}
