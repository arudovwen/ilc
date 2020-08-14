<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Resource extends Model
{
    protected $fillable = ['school_id','tutor_id','subject','level','module','excerpt','content','worksheet','worksheet_id','note','cover_image','curriculum_id','syllabus_id'];

    public function reviews(){
        return $this->hasMany(CourseReview::class);
    }
}
