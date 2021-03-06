<?php

namespace App\Http\Controllers;

use App\User;

use App\PrivateMessage;
use Illuminate\Http\Request;
use App\Events\PrivateMessageSent;

class PrivateMessageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */

    public function sendMessage(Request $request)
    {
     
        $user = auth('api')->user();
        $receiver = User::find($request->receiver_id);
        $message = PrivateMessage::create([
            'school_id'=> $user->school_id,
            'user_id'=> $user->id,
            'receiver_id' => $request->receiver_id,
            'message'=>$request->message,
            'attachment'=>$request->attachment
        ]);
      
    
         broadcast(new PrivateMessageSent($user,$receiver, $message))->toOthers();
    
        return ['status' => 'Message Sent!'];
    }


    public function fetchMessages()
    {
        return PrivateMessage::with('user')->get();
    }

    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\PrivateMessage  $privateMessage
     * @return \Illuminate\Http\Response
     */
    public function show(PrivateMessage $privateMessage)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\PrivateMessage  $privateMessage
     * @return \Illuminate\Http\Response
     */
    public function edit(PrivateMessage $privateMessage)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\PrivateMessage  $privateMessage
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, PrivateMessage $privateMessage)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\PrivateMessage  $privateMessage
     * @return \Illuminate\Http\Response
     */
    public function destroy(PrivateMessage $privateMessage)
    {
        //
    }
}
