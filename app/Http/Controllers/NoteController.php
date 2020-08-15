<?php

namespace App\Http\Controllers;

use App\Note;
use Illuminate\Http\Request;

class NoteController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user = auth('api')->user();
        return Note::where('school_id', $user->school_id)->where('user_id', $user->id)->where('user', 'student')->latest()->get();
    }

    public function tutorNote()
    {
        $user = auth('tutor')->user();
        return Note::where('school_id', $user->school_id)->where('user_id', $user->id)->where('user', 'tutor')->latest()->get();
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
        return Note::create([
          'school_id'=> $user->school_id,
          'user_id'=> $user->id,
          'note'=> $request->description,
          'title'=>$request->title,
          'user'=>'student',
       
        ]);
    }

    public function storeTutorNote(Request $request)
    {
        $user = auth('tutor')->user();
        return Note::create([
          'school_id'=> $user->school_id,
          'user_id'=> $user->id,
          'note'=> $request->description,
          'title'=>$request->title,
          'user'=>'tutor',
       
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Note  $note
     * @return \Illuminate\Http\Response
     */
    public function show(Note $note)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Note  $note
     * @return \Illuminate\Http\Response
     */
    public function edit(Note $note)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Note  $note
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Note $note)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Note  $note
     * @return \Illuminate\Http\Response
     */
    public function destroy( $id)
    {
        $school = Note::find($id);
        $school->delete();
        return response()->json([
            'status' => 'Removed'
        ]);
    }
}
