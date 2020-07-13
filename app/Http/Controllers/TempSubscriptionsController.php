<?php

namespace App\Http\Controllers;

use App\TempSubscription;
use Illuminate\Http\Request;

class TempSubscriptionsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return TempSubscription::all();
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
      
     
        return TempSubscription::create([
            'school_id'=> $request->school_id,
            'name'=> $request->name,
            'start' => $request->start,
            'end' => $request->end,
            'price' => $request->price,
            'status' => $request->status
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\TempSubscription  $tempSubscription
     * @return \Illuminate\Http\Response
     */
    public function show( $id)
    {
        return TempSubscription::find($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\TempSubscription  $tempSubscription
     * @return \Illuminate\Http\Response
     */
    public function edit(TempSubscription $tempSubscription)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\TempSubscription  $tempSubscription
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, TempSubscription $tempSubscription)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\TempSubscription  $tempSubscription
     * @return \Illuminate\Http\Response
     */
    public function destroy( $id)
    {
       
            $find = TempSubscription::find($id);
            $find->delete();
        
     
        return response()->json([
            'status'=>'Deleted'
        ]);
    }
}
