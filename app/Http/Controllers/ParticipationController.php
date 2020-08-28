<?php

namespace App\Http\Controllers;

use App\Participation;
use Illuminate\Http\Request;

class ParticipationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user = auth('tutor')->user();
      return  $find = Participation::where('school_id', $user->school_id)->get();
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
       
        $user = auth('tutor')->user();
        $find = Participation::where('school_id', $user->school_id)->where('att_id', $request->att_id)->where('subject', $request->subject)->where('user_id', $request->user_id)->where( 'date',$request->date)->first();
        if(is_null($find)){
            return   Participation::create([
                'school_id'=> $user->school_id,
                'tutor'=>$request->tutor,
                'user_id' => $request->user_id,
                'subject'=>$request->subject,
                'score'=>$request->score,
                'date'=>$request->date,
                'day'=>$request->day,
                'att_id'=>$request->att_id

            ]);
        }else{
            $find->score = $request->score;
            $find->save();
            return $find;
        }
       
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Participation  $participation
     * @return \Illuminate\Http\Response
     */
    public function studpart(){
        $user = auth('api')->user();
      return  $find = Participation::where('school_id', $user->school_id)->where('user_id', $user->id)->get();
    }
    public function show(Participation $participation)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Participation  $participation
     * @return \Illuminate\Http\Response
     */
    public function edit(Participation $participation)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Participation  $participation
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Participation $participation)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Participation  $participation
     * @return \Illuminate\Http\Response
     */
    public function destroy(Participation $participation)
    {
        //
    }
}
