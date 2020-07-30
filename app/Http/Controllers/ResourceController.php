<?php

namespace App\Http\Controllers;

use App\User;
use App\Classes;
use App\Resource;
use App\Notification;
use Illuminate\Http\Request;
use App\Events\ResourceAdded;
use App\Syllabus;
use Illuminate\Support\Facades\DB;
use App\Http\Resources\SyllabusCurriculumResource;

class ResourceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $school_id = auth('tutor')->user()->school_id;
        return Resource::where('school_id', $school_id)->get();
    }
    public function indexAdmin()
    {
        $school_id = auth('admin')->user()->school_id;
        return Resource::where('school_id', $school_id)->get();
    }
    public function indexUser()
    {
        $school_id = auth('api')->user()->school_id;
        return Resource::where('school_id', $school_id)->get();
    }

    public function getResources()
    {
        $user = auth('api')->user();
        return Resource::where('school_id', $user->school_id)->where('level', $user->student_level)->get();
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
        //
        $info =  DB::transaction(function () use ($request) {
            $tutor = auth('tutor')->user();
            $syllabus = Syllabus::where('school_id',$tutor->school_id)->where('subject', $request->subject)->where('myclass',$request->level)->first();
              
        
            $tutor = auth('tutor')->user();
            $resource = Resource::create([
            'school_id' => $tutor->school_id,
            'tutor_id'=> $tutor->id,
            'cover_image'=> $request->cover_image,
            'syllabus_id'=>  $syllabus->id,
            'curriculum_id' => $syllabus->curriculum_id,
            'subject' => strtolower($request->subject),
            'level'  => strtolower($request->level),
            'module'  => $request->module,
            'excerpt'  => $request->excerpt,
            'content'  => json_encode($request->content),
            'worksheet'  => $request->worksheet,
            'worksheet_id'  => $request->worksheet_id,
            'note' => $request->note
        ]);
            $exploded=[];
       
            $users = User::where('student_level', $request->level)->get();
            foreach ($users as $value) {
                Notification::create([
                'school_id'=>$tutor->school_id,
                'receiver_id'=>$value->id,
                'message'=> 'New resource added, '.$request->subject.','.$request->module,
                'status'=> false,
                'sender_id'=> $tutor->id ,
                'role' => 'student'
            ]);
                broadcast(new ResourceAdded($users, $resource));
            }
            return $resource;
        });
        return $info;
    }

    /**
     * Display the specified resource.where('school_id',$resource->school_id)->where('myclass', $resource->level)
     *
     * @param  \App\Resource  $resource
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $resource = Resource::find($id);
    
        return  new SyllabusCurriculumResource($resource);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Resource  $resource
     * @return \Illuminate\Http\Response
     */
    public function edit(Resource $resource)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Resource  $resource
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $resource = Resource::find($id);
        $resource->subject = $request->subject;
        $resource->level  = $request->level;
        $resource->module  = $request->module;
        $resource->excerpt  = $request->excerpt;
        $resource->content  = json_encode($request->content);
        $resource->worksheet  = $request->worksheet;
        $resource->worksheet_id  = $request->worksheet_id;
        $resource->note = $request->note;
        $resource->cover_image = $request->cover_image;
        $resource->curriculum_id = $request->curriculum_id;
        $resource->syllabus_id = $request->syllabus_id;
        $resource->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Resource  $resource
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Resource::find($id)->delete();
    }
    public function multiDrop(Request $request)
    {
        foreach ($request->data as $id) {
            $find = Resource::find($id);
            $find->delete();
        }
     
        return response()->json([
            'status'=>'Deleted'
        ]);
    }
}
