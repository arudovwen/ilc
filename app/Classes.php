<?php

namespace App;

use App\Tutor;
use Illuminate\Database\Eloquent\Model;

class Classes extends Model
{
    protected $table = 'classes';
    protected $fillable = ['school_id','class_name','sub_class'];


    public function tutor(){
        return $this->hasOne(Tutor::class);
    }
}
