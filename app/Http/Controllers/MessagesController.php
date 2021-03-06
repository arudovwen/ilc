<?php

namespace App\Http\Controllers;

use App\Group;
use App\Tutor;
use App\Message;
use Illuminate\Http\Request;
use App\Events\GroupMessageSent;
use Illuminate\Support\Facades\DB;
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
        $tutor =  auth('tutor')->user();
 
        return Message::with('tutor')->where('school_id', $tutor->school_id)->get();
    }

    public function getGroupChat()
    {
        $user =  auth('api')->user();
 
        return Message::with('user')->with('group')->where('school_id', $user->school_id)->get();
    }

    public function getTutorChat()
    {
        $user =  auth('tutor')->user();
        return Message::with('user')->with('group')->where('school_id', $user->school_id)->get();
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
 
        return Message::with('tutor')->with('user')->where('group_id', $groupId)->get();
    }
    public function getStudentMessages($groupId)
    {
        return Message::with('user')->with('tutor')->where('group_id', $groupId)->get();
    }

    public function sendGroupMessage(Request $request)
    {
     $mess =  DB::transaction(function ()use($request) {
        $user =  auth('tutor')->user();
        $tutor = Tutor::find($user->id);
        $group =  Group::where('id', $request->input('group_id'))->first();

        $message = Message::create([
            'school_id'=> $user->school_id,
            'user_id' => null,
            'message' => $request->input('message'),
            'group_id'=> $request->input('group_id'),
            'attachment' => $request->attachment,
            'tutor_id' => $tutor->id,
        ]);

         broadcast(new GroupMessageSent($tutor, $message, $group))->toOthers();

        return ['status' => 'Message Sent!'];
       });
       return $mess;
    }
    public function sendStudentGroupMessage(Request $request)
    {
      
     $mess=  DB::transaction(function () use($request) {
        $user =  auth('api')->user();
        $group =  Group::where('id', $request->input('group_id'))->first();
        $tutor = Tutor::where('id', $group->tutor_id)->first();
      
       
            $message = Message::create([
                'school_id'=> $user->school_id,
                'user_id' => $user->id,
                'message' => $request->input('message'),
                'group_id'=> $request->input('group_id'),
                'attachment' => $request->attachment,
                'tutor_id' => null,

            ]);

      
         broadcast(new GroupMessageSent( $user , $message, $group))->toOthers();

        return ['status' => 'Message Sent!'];
       });
       return $mess;
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
