<?php

namespace App;

use App\User;
use Illuminate\Database\Eloquent\Model;

class AssessmentResult extends Model
{
    protected $table = 'assessment_results';
    protected $fillable = ['school_id','tutor_id','user_id','level','subject','type','total_score','title','record','overall'];


    public function user(){
        return $this->belongsTo(User::class);
        }
}
