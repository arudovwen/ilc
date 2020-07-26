<?php

namespace App\Http\Controllers;

use App\Assessment;
use Illuminate\Http\Request;

class AssessmentController extends Controller
{
    public function index()
    {
        $school_id = auth('tutor')->user()->school_id;
        $tutor_id = auth('tutor')->user()->id;
        return Assessment::where('school_id', $school_id)->where('tutor_id',$tutor_id)->get();
    }
    public function show($id)
    {
        $school_id = auth('tutor')->user()->school_id;
        $tutor_id = auth('tutor')->user()->id;
        return Assessment::where('type', $id)->where('school_id', $school_id)->where('tutor_id',$tutor_id)->get();
    }
    public function getSingleAssessment($id){
        
        return Assessment::find($id);
    }
    public function getAssessments($id)
    {
        $user = auth('api')->user();
       
        return Assessment::where('school_id', $user->school_id)->where('level',$user->student_level)->get();
    }
    public function getAssessmentsType($id)
    {
        $user = auth('api')->user();
       
        return Assessment::where('type', $id)->where('school_id', $user->school_id)->where('level',$user->student_level)->get();
    }
    public function store(Request $request)
    {
        $school_id = auth('tutor')->user()->school_id;
        $tutor_id = auth('tutor')->user()->id;
        return Assessment::create([
            'school_id'=>$school_id,
            'tutor_id'=>$tutor_id,
            'title'=>$request->title,
            'session'=>$request->session,
            'subject'=> $request->subject,
            'type'=>$request->type,
            'duration'=>$request->duration,
            'status'=>'pending',
            'level'=>$request->level,
            // 'start'=>$request->start,
            // 'end'=>$request->end,
            'assessment'=>\json_encode($request->assessment),
        ]);
    }
    public function destroy($id)
    {
        $admin = Assessment::find($id);
        $admin->delete();
        return response()->json([
            'status' => 'Removed'
        ]);
    }
    public function multiDrop(Request $request)
    {
 
        foreach ($request->data as $id) {
            $find = Assessment::find($id);
            $find->delete();
        }
     
        return response()->json([
            'status'=>'Deleted'
        ]);
    }
}
