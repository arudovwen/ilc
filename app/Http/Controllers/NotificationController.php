<?php

namespace App\Http\Controllers;

use App\Notification;
use Illuminate\Http\Request;

class NotificationController extends Controller
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
    public function store(Request $request)
    {
        $school_id = auth($request->role)->user()->school_id;
        $notification = Notification::create([
            'school_id'=>$school_id,
            'receiver_id'=>$$request->receiver_id,
            'message'=>$request->message,
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Notification  $notification
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $school_id = auth('api')->user()->school_id;
        return Notification::where('school_id', $school_id)->where('receiver_id', $id)->where('role', 'student')->latest()->get();
        
    }

    public function showAdminNotifications($id)
    {
        $school_id = auth('admin')->user()->school_id;
        return Notification::where('school_id', $school_id)->where('receiver_id', $id)->where('role', 'admin')->latest()->get();
    }

    public function showTutorNotifications($id)
    {
        $school_id = auth('tutor')->user()->school_id;
        return Notification::where('school_id', $school_id)->where('receiver_id', $id)->where('role', 'tutor')->latest()->get();
    }
    public function updateStatus($id)
    {
        $school_id = auth('api')->user()->school_id;
        $notify = Notification::where('school_id', $school_id)->where('receiver_id', $id)->where('role', 'student')->latest()->get();

        foreach ($notify as $value) {
            $value->status = true;
            $value->save();
        }
        return response()->json([
       'status' =>'updated'
   ]);
    }
    public function updateTutorStatus($id)
    {
        $school_id = auth('tutor')->user()->school_id;
        $notify = Notification::where('school_id', $school_id)->where('receiver_id', $id)->where('role', 'tutor')->latest()->get();
        foreach ($notify as $value) {
            $value->status = true;
            $value->save();
        }
        return response()->json([
        'status' =>'updated'
    ]);
    }
 
    public function updateAdminStatus($id)
    {
        $school_id = auth('admin')->user()->school_id;
        $notify =  Notification::where('school_id', $school_id)->where('receiver_id', $id)->where('role', 'admin')->latest()->get();
        foreach ($notify as $value) {
            $value->status = true;
            $value->save();
        }
        return response()->json([
        'status' =>'updated'
    ]);
    }
    /**
         * Show the form for editing the specified resource.
         *
         * @param  \App\Notification  $notification
         * @return \Illuminate\Http\Response
         */
    public function edit(Notification $notification)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Notification  $notification
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Notification $notification)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Notification  $notification
     * @return \Illuminate\Http\Response
     */
    public function destroy(Notification $notification)
    {
        //
    }
}
