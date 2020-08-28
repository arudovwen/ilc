<?php

namespace App\Http\Controllers;

use App\User;
use App\Tutor;
use App\Attendance;
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
        $check= Attendance::where('user_id', $request->user_id)->where('date', '=', $request->date)->first();
        $tutor = Tutor::where('name', $request->tutor)->first();
        $ar = [];
        if (is_null($check)) {
            return Attendance::create([
                'school_id'=>$request->school_id,
                'user_id'=>$request->user_id,
                'tutor_id'=>$tutor->id,
                'record'=>\json_encode($request->record),
                'date'=>$request->date,
                'day'=>$request->day,
                'level'=>$request->level,
                'time'=>$request->time,
            ]);
        } else {
            foreach (\json_decode($check->record) as $val) {
                if ($val->subject == $request->subject) {
                    array_push($ar, $val->subject);
                }
            }
         
            if (count($ar)) {
                return 'present';
            } else {
                $record = \json_decode($check->record);
                
                array_push($record, $request->record[0]);
                $check->record = \json_encode($record);
                $check->save();
                return $check;
            }
        }
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
            array_push($arr,$value);
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
    
    public function tutorgetAttendance()
    {
        $user = auth('tutor')->user();
        return Attendance::with('user')->where('school_id', $user->school_id)->get();
    }

    public function getStudentAttendance()
    {
        $user = auth('api')->user();
        return Attendance::where('user_id', $user->id)->get();
    }
    public function getsortedStudentAttendance()
    {
        $user = auth('tutor')->user();
       $val = Attendance::where('school_id', $user->school_id)->with('user')->get();
       $arr = [];
       foreach($val as $value){
        foreach(  \json_decode(  $value->record) as $v){
            $v->id = $value->id;
            $v->date = $value->date;
            $v->level = $value->level;
            $v->user = $value->user;
            $v->day = $value->day;
            array_push($arr,$v);
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
