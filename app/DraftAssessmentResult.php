<?php

namespace App;

use App\User;
use Illuminate\Database\Eloquent\Model;

class DraftAssessmentResult extends Model
{
    protected $table = 'draft_assessment_result';
    protected $fillable = ['school_id','tutor_id','status','user_id','level','subject','type','total_score','title','record','overall'];

    public function user(){
    return $this->belongsTo(User::class);
    }
}
