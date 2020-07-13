<?php

namespace App;

use App\School;
use App\Classes;
use App\Faculty;
use App\Message;
use App\Department;
use App\CourseLevel;
use App\EducationLevel;
use Laravel\Passport\HasApiTokens;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Tutor extends Authenticatable
{
    use HasApiTokens, Notifiable;

    protected $fillable = [
        'name', 'email', 'password','id_no','phone','gender','level_of_edu','subjects',
        'school',
        'faculty',
        'department',
        'course_level',
        'school_id'
    ];

    public function school()
    {
        return $this->belongsTo(School::class);
    }
    public function faculty()
    {
        return $this->belongsTo(Faculty::class);
    }
    public function department()
    {
        return $this->belongsTo(Department::class);
    }
    public function educationLevel()
    {
        return $this->belongsTo(EducationLevel::class);
    }
    public function courseLevel()
    {
        return $this->belongsToMany(CourseLevel::class);
    }
    public function classes(){
        return $this->hasOne(Classes::class);
    }
    public function messages(){
        return $this->hasMany(Message::class);
    }
}
