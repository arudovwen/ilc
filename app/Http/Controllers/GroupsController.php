<?php

namespace App\Http\Controllers;

use App\User;
use App\Group;
use App\Notification;
use App\Events\DeletedGroup;
use App\Events\GroupCreated;
use Illuminate\Http\Request;
use App\Events\GroupSubscribed;
use Illuminate\Support\Facades\DB;

class GroupsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $tutor = auth('tutor')->user();
   
        return Group::where('school_id', $tutor->school_id)->where('tutor_id', $tutor->id)->get();
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
    public $students;
    public function store(Request $request)
    {
       
        $group = DB::transaction(function () use ($request) {
            $tutor = auth('tutor')->user();
            $student = [];
            if (is_null($request->subscribers)) {
                $students = User::where('school_id', $tutor->school_id)->where('student_level', $request->class_name)->get();
                foreach ($students as $value) {
                    \array_push($student, $value->id);
                }
            } else {
                $student = $request->subscribers;
            }

            $maingroup = Group::create([
            'name'=>\strtolower($request->name),
            'tutor_id'=> $tutor->id,
            'school_id'=>$tutor->school_id,
            'class_name' => \trim($request->class_name),
            'subscribers' => \json_encode($student)
        ]);
            $createdMessage = Notification::create([
            'school_id'=>$tutor->school_id,
            'receiver_id'=>$tutor->id,
            'message'=> \ucfirst($request->name).' group created',
            'status'=> false,
            'sender_id'=> $tutor->id ,
            'role' => 'tutor',
            'type'=>'Group'
        ]);

            foreach ($student as $key) {
                $user = User::find($key);
                $subscribedMessage = Notification::create([
                'school_id'=>$tutor->school_id,
                'receiver_id'=>$key,
                'message'=>'You have been subscribed to '.\strtolower($request->name).' group',
                'status'=> false,
                'sender_id'=>$maingroup->id,
                'role' => 'student',
                'type'=>'Group'
            ]);

                broadcast(new GroupSubscribed($maingroup, $subscribedMessage));
            }
            broadcast(new GroupCreated($maingroup, $createdMessage));
           

            return $maingroup;
        });
        return $group;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Group  $group
     * @return \Illuminate\Http\Response
     */
    public function getStudentGroups()
    {
        $user = auth('api')->user();
        $student_group = [];
        $groups = Group::where('school_id', $user->school_id)->get();
        foreach ($groups as $value) {
            foreach (json_decode($value->subscribers) as $v) {
                if ($user->id == $v) {
                    \array_push($student_group, $value);
                }
            }
        }
        return $student_group;
    }
    public function show($id)
    {
        return Group::find($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Group  $group
     * @return \Illuminate\Http\Response
     */
    public function edit(Group $group)
    {
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Group  $group
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $group = Group::find($id);
        $group->name=$request->name;
        $s->class_name = $request->class_name;
        $group->save();
        return $group;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Group  $group
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $group = Group::find($id);
       
        foreach (json_decode($group->subscribers) as $key) {
            Notification::create([
                'school_id'=>$group->school_id,
                'receiver_id'=>$key,
                'message'=> \ucfirst($group->name).' group removed',
                'status'=> false,
                'sender_id'=> $group->id ,
                'role' => 'student',
                'type' => 'group'
            ]);
            broadcast(new DeletedGroup($group));
           
        }
        $group->delete();
       
    }
    public function multiDrop(Request $request)
    {
        foreach ($request->data as $id) {
            $group = Group::find($id);
            foreach (json_decode($group->subscribers) as $key) {
                Notification::create([
            'school_id'=>$group->school_id,
            'receiver_id'=>$key,
            'message'=> \strtolower($group->name).' group removed',
            'status'=> false,
            'sender_id'=> $group->id ,
            'role' => 'student'
        ]);
                broadcast(new DeletedGroup($group));
            }
        }
        $group->delete();
        return response()->json([
            'status'=>'Deleted'
        ]);
    }
}
