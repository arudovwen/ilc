<?php

namespace App;

use App\User;
use App\Tutor;
use Illuminate\Database\Eloquent\Model;

class Faculty extends Model
{
    public function user()
    {
        return $this->hasMany(User::class);
    }
    public function tutor()
    {
        return $this->hasMany(Tutor::class);
    }
}
