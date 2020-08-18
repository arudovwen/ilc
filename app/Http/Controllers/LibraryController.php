<?php

namespace App\Http\Controllers;

use App\Library;
use Illuminate\Http\Request;

class LibraryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user = auth('api')->user();
        return Library::where('school_id', $user->school_id)->where('student_id', $user->id)->latest()->paginate(10);
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
        $user = auth('api')->user();
   
     $library =  Library::where('student_id',$user->id)->where('school_id',$user->school_id)->where('course_id',$request->id)->first();
 
      if (is_null($library)) {
        return Library::create([
            'course_id'=> $request->id,
            'student_id'=> $user->id,
            'school_id'=> $user->school_id,
            'subject'=> $request->subject,
            'title'=> $request->title,
            'level'=> $request->level,
            'excerpt'=> $request->excerpt,
            'content'=> \json_encode($request->content),
            'worksheet_id'=> $request->worksheet_id,
        ]);
      }else{
        Library::find($library->id)->delete();
        return Library::create([
            'course_id'=> $request->id,
            'student_id'=> $user->id,
            'school_id'=> $user->school_id,
            'subject'=> $request->subject,
            'title'=> $request->title,
            'excerpt'=> $request->excerpt,
            'content'=> \json_encode($request->content),
            'worksheet_id'=> $request->worksheet_id,
        ]);
      }
     
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Library  $library
     * @return \Illuminate\Http\Response
     */
    public function show( $id)
    {
        return Library::find($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Library  $library
     * @return \Illuminate\Http\Response
     */
    public function edit(Library $library)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Library  $library
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Library $library)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Library  $library
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $school = Library::find($id);
        $school->delete();
        return response()->json([
            'status' => 'Removed'
        ]);
    }
    public function multiDrop(Request $request)
    {
        foreach ($request->data as $id) {
            $find = Library::find($id);
             $find->delete();
           
        }
     
        return response()->json([
            'status'=>'Deleted'
        ]);
    }
}
