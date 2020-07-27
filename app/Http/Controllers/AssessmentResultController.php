<?php

namespace App\Http\Controllers;

use App\AssessmentResult;
use Illuminate\Http\Request;
use App\Http\Resources\AssessmentResultResource;

class AssessmentResultController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user = auth('tutor')->user();
        return AssessmentResult::where('school_id', $user->school_id)->where('tutor_id',$user->id)->get();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        
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
        $grade = AssessmentResult::where('school_id', $user->school_id)->where('level', $user->student_level)->where('title', $request->title)->where('subject', $request->subject)->first();
        if (is_null($grade)) {
            return AssessmentResult::create([
                'user_id'=>$user->id,
                'school_id'=> $user->school_id,
                'tutor_id'=> $request->tutor_id,
                'level'=>$user->student_level,
                'subject'=>$request->subject,
                'type'=>$request->type,
                'title'=>$request->title,
                'total_score'=>$request->total_score,
                'record'=>\json_encode($request->record),
            ]);
        }
    }
    public function getBooks($level)
    {
        $tutor = auth('tutor')->user();
        $level = Classes::where('id',$level)->value('class_name');
       return  AssessmentResultResource::collection(AssessmentResult::where('school_id', $tutor->school_id)->where('level', $level)->get());
         
    }
    /**
     * Display the specified resource.
     *
     * @param  \App\AssessmentResult  $assessmentResult
     * @return \Illuminate\Http\Response
     */
    public function show(AssessmentResult $assessmentResult)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\AssessmentResult  $assessmentResult
     * @return \Illuminate\Http\Response
     */
    public function edit(AssessmentResult $assessmentResult)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\AssessmentResult  $assessmentResult
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, AssessmentResult $assessmentResult)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\AssessmentResult  $assessmentResult
     * @return \Illuminate\Http\Response
     */
    public function destroy(AssessmentResult $assessmentResult)
    {
        //
    }
}
