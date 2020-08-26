<?php

namespace App\Http\Controllers;

use App\StaffChat;
use Illuminate\Http\Request;
use App\Events\StaffMessageSent;

class StaffChatController extends Controller
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
      
        $tutor = auth('tutor')->user();
        $message = $tutor->staffMessage()->create([
            'school_id'=> $tutor->school_id,
        'message' => $request->input('message')
      ]);
    
         broadcast(new StaffMessageSent($tutor, $message))->toOthers();
    
        return ['status' => 'Message Sent!'];
    }


    public function fetchMessages()
    {
        return StaffChat::with('tutor')->get();
    }

    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\StaffChat  $staffChat
     * @return \Illuminate\Http\Response
     */
    public function show(StaffChat $staffChat)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\StaffChat  $staffChat
     * @return \Illuminate\Http\Response
     */
    public function edit(StaffChat $staffChat)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\StaffChat  $staffChat
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, StaffChat $staffChat)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\StaffChat  $staffChat
     * @return \Illuminate\Http\Response
     */
    public function destroy(StaffChat $staffChat)
    {
        //
    }
}
