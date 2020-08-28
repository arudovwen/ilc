<?php

namespace App\Http\Controllers;

use App\User;
use App\Tutor;
use App\Attendance;
use App\Participation;
use Illuminate\Http\Request;

class AttendanceController extends Controller
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
        $user=auth('api')->user();
        return Attendance::create([
            'school_id'=>$user->school_id,
            'user_id'=>$user->id,
            'tutor_id'=>$request->tutor,
            'record'=>'pending',
            'day'=>$request->day,
            'level'=>$request->level,
            'subject'=>$request->subject,
            'score'=>0,
            'participation_score'=>0,
            'participation_id' => 0
          
        ]);
    }
    public function getAttendance()
    {
        $user= auth('tutor')->user();
        $att= Attendance::where('school_id', $user->school_id)->get();
        $arr = [];
        $mainarr = [];
        foreach ($att as $value) {
            foreach (\json_decode($value->record) as $val) {
                if ($val->tutor_name == $user->name) {
                    $val->user = User::find($value->user_id);
                    $val->date = $value->date;
                    $val->day = $value->day;
                    $val->id = $value->id;
                    array_push($arr, $val);
                }
            }
        }
        return $arr;
    }
    public function updateAttendance(Request $request, $id)
    {
        $att= Attendance::find($id);
        $arr = [];
        foreach (\json_decode($att->record) as $value) {
            if ($value->subject == $request->subject) {
                $value->tutor = $request->value;
            }
            array_push($arr, $value);
        }
        $att->record = \json_encode($arr);
        $att->save();
        
        return $att;
    }
    public function tutorMarking($id)
    {
        $att = Attendance::find($id);
        $att->tutor = $request->tutor;
        $att->save();
    }
    /**
     * Display the specified resource.
     *
     * @param  \App\Attendance  $attendance
     * @return \Illuminate\Http\Response
     */
    public function createAttendance(Request $request)
    {
        $user=auth('tutor')->user();
        $check = Attendance::where('user_id', $request->user_id)->where('tutor_id', $user->id)->where('subject', $request->subject)->where('day', $request->day)->first();
        $score = 0;
        if ($request->value) {
            $score = 1;
        }
        if (is_null($check)) {
            $students = User::find($request->user_id);
            $arr = [];
           
            $part =   Participation::create([
     'school_id'=> $user->school_id,
     'tutor'=>$request->tutor,
     'user_id' => $request->user_id,
     'subject'=>$request->subject,
     'score'=>$request->participation_score,
     'day'=>$request->day,
  

 ]);
            return Attendance::create([
         'school_id'=>$user->school_id,
         'user_id'=>$request->user_id,
         'tutor_id'=>$user->id,
         'record'=>$request->value,
         'day'=>$request->day,
         'level'=>$request->level,
         'subject'=>$request->subject,
         'score'=>$score,
         'participation_score'=>$request->participation_score,
         'participation_id' => $part->id
       
     ]);
        } else {
            $part =   Participation::create([
                'school_id'=> $user->school_id,
                'tutor'=>$request->tutor,
                'user_id' => $request->user_id,
                'subject'=>$request->subject,
                'score'=>$request->participation_score,
                'day'=>$request->day,
             
           
            ]);

            $check->record = $request->value;
            $check->participation_score = $request->participation_score;
            $check->score = $score;
            $check->participation_id = $part->id;
            $check->save();
        }
    }
    public function tutorgetAttendance()
    {
        $user = auth('tutor')->user();
        return Attendance::with('user')->where('school_id', $user->school_id)->get();
    }

    public function getStudentAttendance()
    {
        $user = auth('api')->user();
        $val =  Attendance::where('user_id', $user->id)->get();
       
        return $val;
    }
    public function getsortedStudentAttendance()
    {
        $user = auth('tutor')->user();
        $val = Attendance::where('school_id', $user->school_id)->with('user')->get();
        $arr = [];
        foreach ($val as $value) {
            foreach (\json_decode($value->record) as $v) {
                $v->id = $value->id;
                $v->date = $value->date;
                $v->level = $value->level;
                $v->user = $value->user;
                $v->day = $value->day;
                array_push($arr, $v);
            }
        }
        return $arr;
    }
    public function show(Attendance $attendance)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Attendance  $attendance
     * @return \Illuminate\Http\Response
     */
    public function edit(Attendance $attendance)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Attendance  $attendance
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Attendance $attendance)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Attendance  $attendance
     * @return \Illuminate\Http\Response
     */
    public function destroy(Attendance $attendance)
    {
        //
    }
}
