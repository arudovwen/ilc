<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\TimesTable;
use App\LiveClasses;
use Illuminate\Http\Request;

class LiveClassesController extends Controller
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
        return LiveClasses::create([
            'school_id'=>$request->school_id,
            
            'tutor_id'=>$request->tutor_id,
            
            'date'=>$request->date,
            'day'=>$request->day,
            'subject'=>$request->subject,
            'level'=>$request->level,
            'start_time'=>$request->start_time,
            'end_time'=>$request->end_time,
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\LiveClasses  $liveClasses
     * @return \Illuminate\Http\Response
     */

    public function makeLiveClass()
    {
      $user = auth('admin')->user();
        $tab = TimesTable::where('school_id', $user->school_id)->get();
        $arr = [];
        foreach ($tab as $time) {
            
            foreach (json_decode($time->table) as $value) {
                
                foreach ($value->courses as $t) {
                  
                    $live =  LiveClasses::create([
                    'school_id'=>$time->school_id,
                     'tutor'=>$t->tutor,
                    'date'=>null,
                    'day'=>$value->day,
                    'subject'=>$t->subject,
                    'link'=>"https://",
                    'password'=>null,
                    'level'=>$time->myclass,
                    'start_time'=>$t->start,
                    'end_time'=>$t->end,
                ]);
                    array_push($arr, $time->myclass);
                }
            }
          
        }
        return  $arr;
    }
    public function getMyLive()
    {
        $user = auth('api')->user();
        $today = strtolower(Carbon::now()->englishDayOfWeek);
        return LiveClasses::where('school_id', $user->school_id)->where(strtolower('level'), strtolower($user->sub_class))->where(strtolower('day'), strtolower('monday'))->get();
    }
    public function getTutorMyLive()
    {
        $user = auth('tutor')->user();
        $today = strtolower(Carbon::now()->englishDayOfWeek);
        return LiveClasses::where('school_id', $user->school_id)->where(strtolower('day'), strtolower($today))->get();
    }
    public function adminGetLiveClass()
    {
        $user = auth('admin')->user();
        return LiveClasses::where('school_id', $user->school_id)->get();
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\LiveClasses  $liveClasses
     * @return \Illuminate\Http\Response
     */
    public function edit(LiveClasses $liveClasses)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\LiveClasses  $liveClasses
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,  $id)
    {
        $find = LiveClasses::find($id);
        $find->link = $request->link;
        $find->password = $request->password;
        $find->save();
        return $find;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\LiveClasses  $liveClasses
     * @return \Illuminate\Http\Response
     */
    public function destroy(LiveClasses $liveClasses)
    {
        //
    }
}
