<?php

namespace App\Http\Controllers;

use App\CourseStudent;
use Illuminate\Http\Request;

class CourseStudentsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $school_id = auth('tutor')->user()->school_id;
        return CourseStudent::where('school_id', $school_id)->get();
    }
    public function indexAdmin()
    {
        $school_id = auth('admin')->user()->school_id;
        return CourseStudent::where('school_id', $school_id)->get();
    }
    public function indexUser()
    {
        $school_id = auth('api')->user()->school_id;
        return CourseStudent::where('school_id', $school_id)->get();
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
       
      
        $find = CourseStudent::where('student_id',  $request->student['id'])->first();
        $school_id = auth('admin')->user()->school_id;
        if (is_null($find)) {
            return CourseStudent::create([
            'school_id'=>  $school_id,
            'student_id'=>  $request->student['id'],
            'courses' => json_encode($request->choosen_course)
        ]);
        } else {
          
          
            $find->courses = json_encode($request->choosen_course);
            $find->save();
            return $find;
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\CourseStudent  $courseStudent
     * @return \Illuminate\Http\Response
     */
    public function show(CourseStudent $courseStudent)
    {
        return CourseStudent::find($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\CourseStudent  $courseStudent
     * @return \Illuminate\Http\Response
     */
    public function edit(CourseStudent $courseStudent)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\CourseStudent  $courseStudent
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, CourseStudent $courseStudent)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\CourseStudent  $courseStudent
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        CourseStudent::find($id)->delete();
    }
    public function multiDrop(Request $request)
    {
      
        foreach ($request->data as $id) {
            $find = CourseStudent::find($id);
            $find->delete();
        }
     
        return response()->json([
            'status'=>'Deleted'
        ]);
    }
}
