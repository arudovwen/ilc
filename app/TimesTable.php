<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TimesTable extends Model
{
    protected $table = 'times';
    protected $fillable = ['school_id','myclass','table'];
}
