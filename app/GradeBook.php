<?php

namespace App;

use App\User;
use Illuminate\Database\Eloquent\Model;

class GradeBook extends Model
{
    protected $table = 'grade_books';
    protected $fillable = ['school_id','user_id','level','subject','quiz','examination','assignment','test','total_score','title','record'];

    public function users(){
        return $this->belongsTo(User::class);
    }
}
