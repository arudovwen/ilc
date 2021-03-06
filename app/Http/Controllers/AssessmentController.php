<?php

namespace App\Http\Controllers;

use App\User;
use App\Assessment;
use App\Notification;
use Illuminate\Http\Request;
use App\Events\MyNotification;

class AssessmentController extends Controller
{
    public function index()
    {
        $school_id = auth('tutor')->user()->school_id;
        $tutor_id = auth('tutor')->user()->id;
        return Assessment::where('school_id', $school_id)->where('tutor_id', $tutor_id)->get();
    }
    public function show($id)
    {
        $school_id = auth('tutor')->user()->school_id;
        $tutor_id = auth('tutor')->user()->id;
        return Assessment::where('type', $id)->where('school_id', $school_id)->where('tutor_id', $tutor_id)->where('status', '!=', 'draft')->get();
    }

    public function getDraft($id)
    {
        $school_id = auth('tutor')->user()->school_id;
        $tutor_id = auth('tutor')->user()->id;
        return Assessment::where('type', $id)->where('school_id', $school_id)->where('tutor_id', $tutor_id)->where('status', '=', 'draft')->get();
    }
    public function getAdminAssessment($id)
    {
        return Assessment::find($id);
    }
    public function getSingleAssessment($id)
    {
        return Assessment::find($id);
    }
    public function getAssessments($id)
    {
        $user = auth('api')->user();
       
        return Assessment::where('school_id', $user->school_id)->where('level', $user->student_level)->where('status', 'approved')->where('publish_status', 1)->get();
    }
    public function getAssessmentsType($id)
    {
        $user = auth('api')->user();
       
        return Assessment::where('type', $id)->where('school_id', $user->school_id)->where('level', $user->student_level)->where('status', 'approved')->where('publish_status', 1)->get();
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
            'total_score'=>$request->total_score,
            'start'=>$request->start,
            'end'=>$request->end,
            'description'=>$request->description,
            'questions'=>$request->questions,
            'feedback'=>$request->feedback,
            'deadline'=>$request->deadline,
            'assessment'=>\json_encode($request->assessment),
            'publish_status'=>false
        ]);
    }

    public function saveDraft(Request $request)
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
            'status'=>'draft',
            'level'=>$request->level,
            'total_score'=>$request->total_score,
            'start'=>$request->start,
            'end'=>$request->end,
            'assessment'=>\json_encode($request->assessment),
            'publish_status'=>false
        ]);
    }

    public function getAdminAssessments()
    {
        $admin = auth('admin')->user();
       
        return Assessment::where('school_id', $admin->school_id)->where('status', '!=', 'draft')->get();
    }
    public function verifyAssessment(Request $request, $id)
    {
        $admin = auth('admin')->user();
        $find =  Assessment::find($id);
       
      
        $find->status = $request->status;
        $find->save();
        
        return response()->json([
        'status' => 'updated'
    ]);
    }
    public function publish(Request $request, $id)
    {
        $tutor = auth('tutor')->user();

       
        $find =  Assessment::find($id);
       
  
        $find->publish_status = $request->stat;
        $find->save();

       if ($request->stat) {
        $users = User::where('student_level', $find->level)->get();
        foreach ($users as $user) {
            Notification::create([
            'school_id'=>$tutor->school_id,
            'receiver_id'=>$user->id,
            'message'=>'New '.ucfirst($find->subject).' '.ucfirst($find->type).'  is available',
            'status'=> false,
            'sender_id'=> $tutor->id ,
            'role' => 'student',
            'type'=>'Assessment',
            'resource_id'=>$find->id,
        ]);
            broadcast(new MyNotification($user, $find));
        }
       
       }
        
        return response()->json([
        'status' => 'updated'
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
