<?php

namespace App;

use App\User;
use App\Tutor;
use Illuminate\Database\Eloquent\Model;

class CourseLevel extends Model
{
    protected $table ='course_level';
    protected $fillable = ['course_level','abbrevation'];

    public function user()
    {
        return $this->hasMany(User::class);
    }
    public function tutor()
    {
        return $this->hasMany(Tutor::class);
    }
}
