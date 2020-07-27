<?php

namespace App\Http\Controllers;

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
        return TimesTable::where('school_id',$school_id)->get();
    }
    public function indexTutor()
    {
        $school_id = auth('tutor')->user()->school_id;
        return TimesTable::where('school_id', $school_id)->get();
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
    public function show( $id)
    {
        return TimesTable::find($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\TimesTable  $timesTable
     * @return \Illuminate\Http\Response
     */
    public function edit($id )
    {
        
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\TimesTable  $timesTable
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $s = TimesTable::find($id);
        $s->mytime = $request->mytime;
        $s->table = $request->table;
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
