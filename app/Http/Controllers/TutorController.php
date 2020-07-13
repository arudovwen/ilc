<?php

namespace App\Http\Controllers;

use App\Tutor;
use App\School;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class TutorController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $school_id = auth('admin')->user()->school_id;
        return Tutor::where('school_id', $school_id)->get();
    }

    public function tutorDetail()
    {
        return auth('tutor')->user();
      
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
       
        $school_id = auth('admin')->user()->school_id;
        $school_name = School::find($school_id)->schools;
   
        return Tutor::create([
            'name' => $request['name'],
            'email' => $request['email'],
            'password' => Hash::make($request['password']),
            'id_no' => rand(0,99999),
            'phone' => $request['phone'],
            'gender' => $request['gender'],
            'school' => $school_name,
            'school_id' => $school_id,
            'subjects' => $request['subjects']
            
        
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Tutor::find($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        return Tutor::find($id);
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
        $tutor = Tutor::find($id);
        $tutor['name'] = $request['name'];
        $tutor['email'] = $request['email'];
        $tutor['email'] = Hash::make($request['password']);
        $tutor['id_no'] = $request['id_no'];
        $tutor['phone'] = $request['phone'];
        $tutor['gender'] = $request['gender'];
        $tutor['level_of_edu'] = $request['level_of_edu'];
        $tutor['tutor'] = $request['tutor'];
        $tutor['faculty'] = $request['faculty'];
        $tutor['department'] = $request['department'];
        $tutor['course_level']= $request['course_level'];
        $tutor['student_id'] =  $request['student_id'];
        $tutor['subjects'] =  $request['subjects'];
        $tutor->save();
        return response()->json([
            'status' => 'Updated'
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
        $tutor = Tutor::find($id);
        $tutor->delete();
        return response()->json([
            'status' => 'Removed'
        ]);
    }
}
