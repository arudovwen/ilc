<?php

use App\Tutor;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Broadcast;

/*
|--------------------------------------------------------------------------
| Broadcast Channels
|--------------------------------------------------------------------------
|
| Here you may register all of the event broadcasting channels that your
| application supports. The given channel authorization callbacks are
| used to check if an authenticated user can listen to the channel.
|
*/

Broadcast::channel('{groupName}{groupId}{tutorId}', function ($user, $tutorId) {
    
    return $user;
});
  Broadcast::channel('group-created{id}', function ($user,$id) {
    return (int) $user->id === (int) $id;
  });
  Broadcast::channel('group-subscribed{id}', function ($user,$id) {
    return (int) $user->id === (int) $id;
  });
  Broadcast::channel('resource-added{id}', function ($user,$id) {
    return (int) $user->id === (int) $id;
  });
  Broadcast::channel('dashboard-created.{id}', function ($user) {
      return $user;
  });
  Broadcast::channel('deleted-group{id}', function ($user) {
    return (int) $user->id === (int) $id;
});

Broadcast::channel('chat', function ($user) {
  return Auth::check();
});
