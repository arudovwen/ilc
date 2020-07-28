<?php

namespace App\Http\Controllers;

use App\GradeBook;
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
        return AssessmentResultResource::collection(AssessmentResult::where('school_id', $user->school_id)->where('tutor_id', $user->id)->get());
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
        $assessment = AssessmentResult::where('school_id', $user->school_id)->where('level', $user->student_level)->where('subject', $request->subject)->where('type',$request->type)->where('title',$request->title)->first();
        $grade = GradeBook::where('school_id', $user->school_id)->where('user_id', $user->id)->where('subject', $request->subject)->where('level', $user->student_level)->first();
       
        if (is_null($assessment)) {
            $result = AssessmentResult::create([
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
            if (is_null($grade)) {
                $gradeNew = new GradeBook;
                $gradeNew->user_id=$user->id;
                $gradeNew->school_id= $user->school_id;
                $gradeNew->level=$user->student_level;
                $gradeNew->subject =$request->subject;
                $gradeNew->title =$request->title;
                $gradeNew->record=json_encode($request->record);
                if ($request->type=='quiz') {
                    if (is_null($gradeNew->quiz)) {
                        $gradeNew->quiz = $request->total_score;
                    } else {
                        $gradeNew->quiz = $gradeNew->quiz + $request->total_score;
                    }
                } elseif ($request->type== 'examination') {
                    if (is_null($gradeNew->examination)) {
                        $gradeNew->examination = $request->total_score;
                    } else {
                        $gradeNew->examination = $gradeNew->examination + $request->total_score;
                    }
                } elseif ($request->type == 'test') {
                    if (is_null($gradeNew->test)) {
                        $gradeNew->test = $request->total_score;
                    } else {
                        $gradeNew->test = $gradeNew->test + $request->total_score;
                    }
                } else {
                    if (is_null($gradeNew->assignment)) {
                        $gradeNew->assignment = $request->total_score;
                    } else {
                        $gradeNew->assignment = $gradeNew->assignment + $request->total_score;
                    }
                }
                $gradeNew->total_score = $gradeNew->assignment + $gradeNew->examination + $gradeNew->quiz + $gradeNew->test;
                $gradeNew->save();
            } else {
                $grade->user_id=$user->id;
                $grade->school_id= $user->school_id;
                $grade->level=$user->student_level;
                $grade->subject =$request->subject;
                $grade->title =$request->title;
                $grade->record=json_encode($request->record);
                if ($request->type=='quiz') {
                    if (is_null($grade->quiz)) {
                        $grade->quiz = $request->total_score;
                    } else {
                        $grade->quiz = $grade->quiz + $request->total_score;
                    }
                } elseif ($request->type== 'examination') {
                    if (is_null($grade->examination)) {
                        $grade->examination = $request->total_score;
                    } else {
                        $grade->examination = $grade->examination + $request->total_score;
                    }
                } elseif ($request->type == 'test') {
                    if (is_null($grade->test)) {
                        $grade->test = $request->total_score;
                    } else {
                        $grade->test = $grade->test + $request->total_score;
                    }
                } else {
                    if (is_null($grade->assignment)) {
                        $grade->assignment = $request->total_score;
                    } else {
                        $grade->assignment = $grade->assignment + $request->total_score;
                    }
                }
                $grade->total_score = $grade->assignment + $grade->examination + $grade->quiz + $grade->test;
                $grade->save();
            }

            return $result;
        }
    }
    public function getBooks($level)
    {
        $tutor = auth('tutor')->user();
        $level = Classes::where('id', $level)->value('class_name');
        return  AssessmentResultResource::collection(AssessmentResult::where('school_id', $tutor->school_id)->where('level', $level)->get());
    }
    /**
     * Display the specified resource.
     *
     * @param  \App\AssessmentResult  $assessmentResult
     * @return \Illuminate\Http\Response
     */
    public function show($level)
    {
        $tutor = auth('tutor')->user();

        return  AssessmentResultResource::collection(AssessmentResult::where('school_id', $tutor->school_id)->where('level', $level)->get());
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
