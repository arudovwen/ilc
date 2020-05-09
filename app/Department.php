<?php

namespace App;

use App\User;
use App\Tutor;
use App\Faculty;
use Illuminate\Database\Eloquent\Model;

class Department extends Model
{

    protected $table ='department';
protected $fillable = ['department','abbrevation'];

    public function user()
    {
        return $this->hasMany(User::class);
    }
    public function tutor()
    {
        return $this->hasMany(Tutor::class);
    }
    public function faculty()
    {
        return $this->belongsTo(Faculty::class);
    }
}
