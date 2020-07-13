<?php

namespace App\Http\Controllers;

use App\Admin;
use App\Order;
use App\School;
use Carbon\Carbon;
use App\Subscription;
use App\TempSubscription;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SubscriptionsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Subscription::all();
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
     
        return Subscription::create([
            'school_id'=> $school_id,
            'name'=> $request->name,
            'start' => $request->start,
            'end' => $request->end,
            'price' => $request->price,
            'status' => $request->status
        ]);
    }

    public function verify($ref)
    {
    $verify =   DB::transaction(function () use($ref) {
        $tempSubscription = TempSubscription::where('ref',$ref)->first();
        $order = Order::where('ref',$ref)->first();

        $school = School::find($tempSubscription ->school_id);
        $school->verify = true;
        $school->save();

        $order->status = 'success';
        $order->save();
       
        $sub = Subscription::where('school_id',$tempSubscription->school_id)->where('name',$tempSubscription->name)->first();
        if (is_null($sub)) {
            Subscription::create([
                'school_id'=> $tempSubscription->school_id,
                'name'=> $tempSubscription->name,
                'start' => Carbon::now(),
                'end' => Carbon::now()->addYear(1),
                'price' => $tempSubscription->price,
                'status' => true
            ]);
            
        }else{
            $sub->school_id= $tempSubscription->school_id;
            $sub->name = $tempSubscription->name;
            $sub->start = $tempSubscription->start;
            $sub->end = Carbon::parse($tempSubscription->end)->addYear(1);
            $sub->price = $tempSubscription->price;
            $sub->status = true;
            $sub->save();
        }
        
        $tempSubscription->delete();

        return response()->json([
            'status' => 'Verified'
        ]);
       });

       return $verify;
    }
    /**
     * Display the specified resource.
     *
     * @param  \App\Subscription  $subscription
     * @return \Illuminate\Http\Response
     */

    public function show($id)
    {
        return Subscription::find($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Subscription  $subscription
     * @return \Illuminate\Http\Response
     */
    public function edit(Subscription $subscription)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Subscription  $subscription
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Subscription $subscription)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Subscription  $subscription
     * @return \Illuminate\Http\Response
     */
    public function destroy(Subscription $subscription)
    {
        //
    }
}
