<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\TimesTable;
use Illuminate\Http\Request;

class TimesTableController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $school_id = auth('admin')->user()->school_id;
        return TimesTable::where('school_id', $school_id)->get();
    }
    public function indexTutor()
    {
        $school_id = auth('tutor')->user()->school_id;
        return TimesTable::where('school_id', $school_id)->get();
    }
    
    public function getTimesTablePerClass($id)
    {
        $user = auth('api')->user();
        return TimesTable::where('school_id', $user->school_id)->where('myclass', $user->sub_class)->get();
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
        $times = TimesTable::where('myclass', $request->myclass)->first();
        $school_id = auth('admin')->user()->school_id;
        if (is_null($times)) {
            return TimesTable::create([
            'school_id'=>  $school_id,
            'myclass'=> $request->myclass,
            'table' => json_encode($request->table)
        ]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\TimesTable  $timesTable
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return TimesTable::find($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\TimesTable  $timesTable
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\TimesTable  $timesTable
     * @return \Illuminate\Http\Response
     */

    public function getCurrentTimesTable($class)
    {
        $user = auth('api')->user();
        $time = TimesTable::where('myclass', $class)->where('school_id', $user->school_id)->firstOrFail();
        json_decode($time->table);
        $today = strtolower(Carbon::now()->englishDayOfWeek);
        $arr = [];
        foreach (json_decode($time->table) as $value) {
            if ($value->day == $today) {
                array_push($arr, $value);
            }
        }
        return  $arr;
    }

    public function getCurrentClass()
    {
        $user = auth('tutor')->user();
        $times = TimesTable::where('school_id', $user->school_id)->get();
        $today = strtolower(Carbon::now()->englishDayOfWeek);
        $arr = [];
        $ar =[];
        foreach ($times as $time) {
            foreach (json_decode($time->table) as $value) {
                if ($value->day == $today) {
                    array_push($arr, $value->courses);
                }
            }
        }

        foreach ($arr as $value) {
            foreach ($value as $v) {
                $v->level = $time->myclass;
                if ($v->tutor == $user->name) {
                    array_push($ar, $v);
                }
            }
        }
       
        return  $ar;
    }
    public function getAllClass()
    {
        $user = auth('tutor')->user();
        $times = TimesTable::where('school_id', $user->school_id)->get();
        $today = strtolower(Carbon::now()->englishDayOfWeek);
        $arr = [];
        $ar =[];
        foreach ($times as $time) {
            foreach (json_decode($time->table) as $value) {
                foreach ($value->courses as $r) {
                    $r->day = $value->day;
                    array_push($arr, $r);
                }
            }
        }
     
        foreach ($arr as $v) {
           
                $v->level = $time->myclass;
                if ($v->tutor == $user->name) {
                    array_push($ar, $v);
                
            }
        }
       
        return  $ar;
    }
    public function update(Request $request, $id)
    {
        $s = TimesTable::find($id);
        $s->myclass = $request->myclass;
        $s->table =  json_encode($request->table);
        $s->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\TimesTable  $timesTable
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        TimesTable::find($id)->delete();
    }
    public function multiDrop(Request $request)
    {
        foreach ($request as $id) {
            $find = TimesTable::find($id);
            $find->delete();
        }
     
        return response()->json([
            'status'=>'Deleted'
        ]);
    }
}
