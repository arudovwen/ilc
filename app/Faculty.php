<?php

namespace App;

use App\User;
use App\Tutor;
use App\Department;
use Illuminate\Database\Eloquent\Model;

class Faculty extends Model
{

    protected $table ='faculty';
protected $fillable = ['faculty','abbrevation'];

    public function user()
    {
        return $this->hasMany(User::class);
    }
    public function tutor()
    {
        return $this->hasMany(Tutor::class);
    }
    public function departments(){
        return $this->hasmany(Department::class);
    }
}
