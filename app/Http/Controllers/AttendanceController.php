<?php

namespace App\Http\Controllers;

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
       
        $check= Attendance::whereDate('date','=',$request->date)->first();
       
        $tutor = Tutor::where('name',$request->tutor)->first();

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
              }else{
                  $record = \json_decode($check->record);
                
                  array_push($record,$request->record[0]);
                 $check->record = \json_encode($record);
                 $check->save();
                 return $check;
                  
              }
    }
    public function tutorMarking($id){
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

     public function getStudentAttendance(){
         $user = auth('api')->user();
         return Attendance::where('user_id', $user->id)->get();
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
