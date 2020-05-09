<?php

namespace App;

use App\User;
use App\Tutor;
use Illuminate\Database\Eloquent\Model;

class EducationLevel extends Model
{
    protected $table ='education_level';
protected $fillable = ['education_level','abbrevation'];

    public function user()
    {
        return $this->hasMany(User::class);
    }
    public function tutor()
    {
        return $this->hasMany(Tutor::class);
    }
}
