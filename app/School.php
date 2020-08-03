<?php

namespace App;

use App\User;
use App\Tutor;
use Laravel\Passport\HasApiTokens;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class School extends Authenticatable
{
    use HasApiTokens, Notifiable;

    public function routeNotificationForMail($notification)
    {
        // Return email address only...
        return $this->email;

        // Return name and email address...
        return [$this->email => $this->name];
    }
    protected $table ='schools';
    protected $fillable = ['schools','abbreviation','email','phone','address','verify','lga','ownership','level'];


    public function user()
    {
        return $this->hasMany(User::class);
    }
    public function tutor()
    {
        return $this->hasMany(Tutor::class);
    }
    public function admin()
    {
        return $this->hasMany(Admin::class);
    }
}
