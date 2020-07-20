<?php

namespace App\Http\Controllers;

use App\Curriculum;
use Illuminate\Http\Request;

class CurriculumController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $school_id = auth('admin')->user()->school_id;
        return Curriculum::where('school_id', $school_id)->get();
    }
    public function getTutorCurriculums(){
        $school_id = auth('tutor')->user()->school_id;
        return Curriculum::where('school_id', $school_id)->get();
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
        return Curriculum::create([
            'school_id'=>  $school_id,  
            'subject'=> $request->subject,
            'curriculum'=> json_encode($request->curriculum),
        
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
        return Curriculum::find($id);
    }

    public function getTutorCurriculum($id){
        return Curriculum::find($id);
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
        $s = Curriculum::find($id);
        $s->subject = $request->subject;
        $s->curriculum = json_encode($request->curriculum);
        $s->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Syllabus::find($id)->delete();
    }
    public function multiDrop(Request $request)
    {
      
        foreach ($request->data as $id) {
            $find = Curriculum::find($id);
            $find->delete();
        }
     
        return response()->json([
            'status'=>'Deleted'
        ]);
    }
}
