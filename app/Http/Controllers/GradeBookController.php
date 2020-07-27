<?php

namespace App\Http\Controllers;

use App\GradeBook;
use Illuminate\Http\Request;

class GradeBookController extends Controller
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
        $user = auth('api')->user()->school_id;
        return GradeBook::create([
            'user_id'=>$user->id,
            'school_id'=> $user->school_id,
            'level'=>$user->student_level,
            'subject'=>$request->subject,
            'type'=>$request->type,
            'title'=>$request->title,
            'record'=>\json_encode($request->record),
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\GradeBook  $gradeBook
     * @return \Illuminate\Http\Response
     */
    public function show(GradeBook $gradeBook)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\GradeBook  $gradeBook
     * @return \Illuminate\Http\Response
     */
    public function edit(GradeBook $gradeBook)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\GradeBook  $gradeBook
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, GradeBook $gradeBook)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\GradeBook  $gradeBook
     * @return \Illuminate\Http\Response
     */
    public function destroy(GradeBook $gradeBook)
    {
        //
    }
}
