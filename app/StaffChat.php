<?php

namespace App;

use App\Tutor;
use Illuminate\Database\Eloquent\Model;

class StaffChat extends Model
{
    protected $table = 'staff_chats';
    protected $fillable = ['school_id','message','attachment'];


    public function tutor(){
        return $this->belongsTo(Tutor::class);
    }
}
