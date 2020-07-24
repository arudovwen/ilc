<?php

namespace App\Http\Controllers;

use App\Syllabus;
use Illuminate\Http\Request;

class SyllabusController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $school_id = auth('admin')->user()->school_id;
        return Syllabus::where('school_id', $school_id)->get();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getTutorSyllabuses(){
        $school_id = auth('tutor')->user()->school_id;
        return Syllabus::where('school_id', $school_id)->get();
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
        return Syllabus::create([
            'school_id'=>  $school_id,
            'myclass'=> $request->myclass,
            'topic'=> $request->topic,
            'syllabus'=> json_encode($request->syllabus),
            'subject' => $request->subject
        ]);
        
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Syllabus  $syllabus
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Syllabus::find($id);
    }
    public function getTutorSyllabus($id){
        return Syllabus::find($id);
    }

    public function getTutorModules($myclass,$subject){
        $syllabus = Syllabus::where('subject', $subject)->where('myclass',$myclass)->first();
       if (!is_null($syllabus)) {
        $module = json_decode($syllabus->syllabus)->modules;
        return $module;
       }

       return response()->json([
        'status'=>'not found'
    ]);

    }
    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Syllabus  $syllabus
     * @return \Illuminate\Http\Response
     */
    public function edit(Syllabus $syllabus)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Syllabus  $syllabus
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $s = Syllabus::find($id);
        $s->myclass = $request->myclass;
        $s->topic = $request->topic;
        $s->subject = $request->subject;
        $s->syllabus = json_encode($request->syllabus);
        $s->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Syllabus  $syllabus
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Syllabus::find($id)->delete();
    }
    public function multiDrop(Request $request)
    {
      
        foreach ($request->data as $id) {
            $find = Syllabus::find($id);
            $find->delete();
        }
     
        return response()->json([
            'status'=>'Deleted'
        ]);
    }
}
