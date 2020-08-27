<?php

namespace App;

use App\Tutor;
use Illuminate\Database\Eloquent\Model;

class LiveClasses extends Model
{
    protected $fillable = ['school_id','tutor','date','start_time','end_time','day','subject','level','link','password'];

    public function liveClass()
    {
      return  $this->belongsTo(Tutor::class);
    }
}
