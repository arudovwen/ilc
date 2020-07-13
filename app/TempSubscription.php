<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TempSubscription extends Model
{
    protected $table = 'temp_subscriptions';
    protected $fillable = ['name','start','end','price','status','school_id','ref'];
}
