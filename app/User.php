<?php

namespace App;

use App\School;
use App\Faculty;
use App\Message;
use App\Department;
use App\CourseLevel;
use App\EducationLevel;
use Laravel\Passport\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use HasApiTokens, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    
    protected $fillable = [
        'name', 'email', 'password','address','mat_no','phone','gender','level_of_edu', 'school','faculty', 'department','course_level','student_id','school_id','dob','state','lga','guardian','guardian_phone','next_of_kin','next_of_kin_phone','student_level','study_course'
        
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
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
        return $this->belongsTo(CourseLevel::class);
    }
    public function messages(){
        return $this->hasMany(Message::class);
    }
}
