<?php

namespace App\Http\Controllers;

use App\Order;
use Carbon\Carbon;
use App\TempSubscription;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class OrdersController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $school_id = auth('admin')->user()->school_id;
        return Order::where('school_id', $school_id)->get();
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
       
     $order =  DB::transaction(function () use($request) {
        TempSubscription::create([
            'school_id'=>  $request->school_id,
            'name'=> $request->name,
            'start' => Carbon::now(),
            'end' => Carbon::now()->addYear(),
            'price' => $request->amount,
            'ref' => $request->ref,
            'status' => false
        ]);
        return Order::create([
            'school_id'=>$request->school_id,
            'name'=> $request->name,
            'ref' => $request->ref,
            'price' => $request->amount,
            'status' => $request->status
        ]);
        
       });

       return $order;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function show(Order $order)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function edit(Order $order)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $order = Order::find($id);
        $order->status = 'payment failed';
        $order->save();
        return response()->json([
            'status'=>'failed'
        ]);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function destroy(Order $order)
    {
        //
    }
}
