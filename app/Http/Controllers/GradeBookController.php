<?php

namespace App\Http\Controllers;

use App\Classes;
use App\GradeBook;
use Illuminate\Http\Request;
use App\Http\Resources\GradeBookResource;

class GradeBookController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $tutor = auth('tutor')->user();
       return GradeBook::with('users')->where('school_id', $tutor->school_id)->get();
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
        $user = auth('api')->user();
        $grade = GradeBook::where('school_id', $user->school_id)->where('level', $user->student_level)->where('title', $request->title)->where('subject', $request->subject)->first();
        if (is_null($grade)) {
            return GradeBook::create([
                'user_id'=>$user->id,
                'school_id'=> $user->school_id,
                'level'=>$user->student_level,
                'subject'=>$request->subject,
                'quiz'=>$request->quiz,
                'test'=>$request->test,
                'examination'=>$request->examination,
                'assignment'=>$request->assignment,
                'title'=>$request->title,
                'total_score'=>$request->total_score,
                'record'=>\json_encode($request->record),
            ]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\GradeBook  $gradeBook
     * @return \Illuminate\Http\Response
     */
    public function getBooks(Request $request)
    {
        $tutor = auth('tutor')->user();
     
       return  GradeBookResource::collection(GradeBook::where('school_id', $tutor->school_id)->where('level', $request->level)->where('subject', $request->subject)->get());
         
    }
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
