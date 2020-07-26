<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
      return  $user = auth('api')->user();
       
    }
    public function adminGetStudents()
    {
        $school_id = auth('admin')->user()->school_id;
        return User::where('school_id', $school_id)->get();
    }
    public function tutorGetStudents($name)
    {
        $school_id = auth('tutor')->user()->school_id;
        return User::where('school_id', $school_id)->where('student_level',$name)->get();
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
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show()
    {
        $id = auth('api')->user()->id;
        return User::find($id);
    }
    public function adminGetUser($id)
    {
        return User::find($id);
    }
    
    public function getUser()
    {
        $id = auth('api')->user()->id;
        return User::find($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $user = User::where('id',$id)->first();
        $user->name = $request['name'];
        //$user->email = $request->email;
        $user->password = Hash::make($request['password']);
        $user->phone = $request['phone'];
        $user->gender = $request['gender'];
        $user->address = $request['address'];
        $user->course_level= $request['course_level'];
        $user->dob = $request['dob'];
        $user->state = $request['state'];
        $user->profile = $request['profile'];
        $user->lga = $request['lga'];
        $user->guardian= $request['guardian'];
        $user->guardian_phone= $request['guardian_phone'];
        $user->next_of_kin = $request['next_of_kin'];
        $user->next_of_kin_phone = $request['next_of_kin_phone'];
        $user->student_level = $request['student_level'];
        $user->study_course = $request['study_course'];
        $user->save();
        return response()->json([
            'status'=>'updated'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $admin = User::find($id);
        $admin->delete();
        return response()->json([
            'status' => 'Removed'
        ]);
    }
    public function multiDrop(Request $request)
    {
        foreach ($request->data as $id) {
            $find = User::find($id);
             $find->delete();
           
        }
     
        return response()->json([
            'status'=>'Deleted'
        ]);
    }
}
