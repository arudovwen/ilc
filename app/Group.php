<?php

namespace App;

use App\Message;
use Illuminate\Database\Eloquent\Model;

class Group extends Model
{
    protected $fillable = ['name','tutor_id','school_id','class_name','subscribers'];

    public function messages()
    {
      return  $this->hasMany(Message::class);
    }
}
