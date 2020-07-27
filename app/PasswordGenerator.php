<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PasswordGenerator extends Model
{
    //
  public  function random_strings($length_of_string) { 
        
        return substr(sha1(time()), 0, $length_of_string); 
    } 
}
