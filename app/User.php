<?php

namespace App;

use App\School;
use App\Faculty;
use App\Message;
use App\GradeBook;
use App\Department;
use App\CourseLevel;
use App\EducationLevel;
use App\PrivateMessage;
use App\AssessmentResult;
use App\DraftAssessmentResult;
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
        'name', 'email', 'password','address','mat_no','phone','gender','level_of_edu', 'school','faculty', 'department','course_level','student_id','school_id','profile', 'dob','state','lga','guardian','guardian_phone','next_of_kin','next_of_kin_phone','student_level','study_course','sub_class'
        
    ];
    public function routeNotificationForMail($notification)
    {
        // Return email address only...
        return $this->email;

        // Return name and email address...
        return [$this->email => $this->name];
    }
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
    public function privateMessages(){
        return $this->hasMany(PrivateMessage::class);
    }
    public function gradebooks(){
        return $this->hasMany(GradeBook::class);
    }

    public function reviews(){
        return $this->hasMany(CourseReview::class);
    }
    public function draftResult(){
        return $this->hasMany(DraftAssessmentResult::class);
    }
    public function result(){
        return $this->hasMany(AssessmentResult::class);
    }
}
