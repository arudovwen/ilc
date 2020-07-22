<?php

namespace App\Http\Controllers;

use App\Group;
use App\Tutor;
use App\Message;
use Illuminate\Http\Request;
use App\Events\GroupMessageSent;
use Illuminate\Support\Facades\Auth;

class MessagesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $tutor =  auth('tutor')->user()->id;
 
        return Message::with('tutor')->get();
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
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Message  $message
     * @return \Illuminate\Http\Response
     */

    public function getMessages($groupId)
    {
        $tutor =  auth('tutor')->user()->id;
 
        return Message::with('tutor')->where('group_id', $groupId)->get();
    }
    public function getStudentMessages($groupId)
    {
        return Message::where('group_id', $groupId)->get();
    }

    public function sendGroupMessage(Request $request)
    {
        $user =  auth('tutor')->user();
        $tutor = Tutor::find($user->id);
        $group =  Group::where('id', $request->input('group_id'))->first();

        $message = Message::create([
            'sender_id' => $tutor->id,
            'message' => $request->input('message'),
            'group_id'=> $request->input('group_id')
        ]);

        broadcast(new GroupMessageSent($tutor, $message, $group));

        return ['status' => 'Message Sent!'];
    }
    public function sendStudentGroupMessage(Request $request)
    {
        $user =  auth('api')->user();
        $group =  Group::where('id', $request->input('group_id'))->first();
        $tutor = Tutor::where('id', $group->tutor_id)->first();
      
       
            $message = Message::create([
                'sender_id' => $user->id,
                'message' => $request->input('message'),
                'group_id'=> $request->input('group_id'),
                'attachment' => $request->attachment
            ]);

      
        broadcast(new GroupMessageSent($tutor, $message, $group));

        return ['status' => 'Message Sent!'];
    }
   
    public function show(Message $message)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Message  $message
     * @return \Illuminate\Http\Response
     */
    public function edit(Message $message)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Message  $message
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Message $message)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Message  $message
     * @return \Illuminate\Http\Response
     */
    public function destroy(Message $message)
    {
        //
    }
}
