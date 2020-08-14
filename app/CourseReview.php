<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CourseReview extends Model
{
    protected $fillable =['user_id','school_id','resource_id','comment','rating'];

    public function user(){
       return $this->belongsTo(User::class);
    }
    public function resource(){
        return $this->belongsTo(Resource::class);
     }
}
