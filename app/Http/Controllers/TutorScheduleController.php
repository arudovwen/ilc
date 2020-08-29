<?php

namespace App\Http\Controllers;

use App\TutorSchedule;
use Illuminate\Http\Request;

class TutorScheduleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user= auth('tutor')->user();
        return TutorSchedule::where('school_id',$user->school_id)->where('tutor_id',$user->id)->get();
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
      
        $user= auth('tutor')->user();
      return  TutorSchedule::create([
                'school_id'=> $user->school_id,
                'tutor_id' => $user->id,
                'date'=> $request->date,
                'description' => $request->description 
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\TutorSchedule  $tutorSchedule
     * @return \Illuminate\Http\Response
     */
    public function show(TutorSchedule $tutorSchedule)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\TutorSchedule  $tutorSchedule
     * @return \Illuminate\Http\Response
     */
    public function edit(TutorSchedule $tutorSchedule)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\TutorSchedule  $tutorSchedule
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, TutorSchedule $tutorSchedule)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\TutorSchedule  $tutorSchedule
     * @return \Illuminate\Http\Response
     */
   
        public function destroy($id)
        {
            TutorSchedule::find($id)->delete();
        }
    
}
