<?php

namespace App\Http\Controllers;

use App\User;
use App\Classes;
use Illuminate\Http\Request;

class ClassesController extends Controller
{
    public function index()
    {
        $school_id = auth('admin')->user()->school_id;
      
        return Classes::where('school_id',$school_id)->get();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getClassmates(){
        $user = auth('api')->user();
        return User::where('school_id',$user->school_id)->where('student_level',$user->student_level)->get();
    }
     public function getAllTutorClasses(){
        $school_id = auth('tutor')->user()->school_id;
        
        return Classes::where('school_id',$school_id)->get();
     }

     public function getAllClassesForStudent(){
        $school_id = auth('api')->user()->school_id;
        
        return Classes::where('school_id',$school_id)->get();
     }
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
        return Classes::create([
            'school_id'=>  $school_id,
            'class_name'=> $request->class_name,
            'sub_class' => $request->sub_class
            
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Classes  $classes
     * @return \Illuminate\Http\Response
     */
    public function show( $id)
    {
        return Classes::find($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Classes  $classes
     * @return \Illuminate\Http\Response
     */
    public function edit( $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Classes  $classes
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,  $id)
    {
        $s = Classes::find($id);
        $s->class_name = $request->class_name;
        $s->sub_class = $request->sub_class;
        $s->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Classes  $classes
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $admin = Classes::find($id);
        $admin->delete();
        return response()->json([
            'status' => 'Removed'
        ]);
    }
    public function multiDrop(Request $request)
    {
 
        foreach ($request->data as $id) {
            $find = Classes::find($id);
            $find->delete();
        }
     
        return response()->json([
            'status'=>'Deleted'
        ]);
    }

}
