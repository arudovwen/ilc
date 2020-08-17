<?php

namespace App\Http\Controllers;

use App\CourseReview;
use Illuminate\Http\Request;

class CourseReviewController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user = auth('api')->user();
        return CourseReview::where('school_id', $user->school_id)
        ->with('user')->with('resource')->latest()->get();
    }

    public function tutorRatings($id)
    {
        $user = auth('tutor')->user();
        return CourseReview::where('school_id', $user->school_id)->where('resource_id', $id)->with('user')->with('resource')->latest()->get();
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
        return CourseReview::create([
          'school_id'=> $user->school_id,
          'user_id'=> $user->id,
          'resource_id'=> $request->course_id,
          'comment'=>$request->comment,
          'rating'=> $request->rating
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\CourseReview  $courseReview
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $user = auth('api')->user();
        return CourseReview::where('school_id', $user->school_id)->where('resource_id', $id)->with('user')->with('resource')->latest()->get();
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\CourseReview  $courseReview
     * @return \Illuminate\Http\Response
     */
    public function edit(CourseReview $courseReview)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\CourseReview  $courseReview
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, CourseReview $courseReview)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\CourseReview  $courseReview
     * @return \Illuminate\Http\Response
     */
    public function destroy(CourseReview $courseReview)
    {
        //
    }
}
