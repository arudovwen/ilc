<?php

namespace App\Http\Controllers;

use App\Lga;
use App\Admin;
use App\School;
use Carbon\Carbon;
use App\TempSubscription;
use Illuminate\Http\Request;
use App\Notifications\NewSchool;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class SchoolController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return School::all();
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
        $present = School::where('email',$request->email)->where('verify',0)->first();
       if (is_null($present)) {
        $result =  DB::transaction(function () use ($request) {
            $school = School::create([
                'schools'=> $request->name,
                'abbreviation'=> $request->abbreviation,
                'email'=> $request->email,
                'phone'=> $request->phone,
                'address'=> $request->address,
                'lga'=> $request->lga,
                'level'=> $request->level,
                'ownership'=> $request->ownership,
                'verify'=> 0,
                
            ]);
            $admin = Admin::create([
              
                'name'=> 'admin',
                'email'=> $request->email,
                'school_id'=>  $school->id,
                'address'=> $request->address,
                'role'=> 'administrator',
                'password'=> Hash::make($request->password),
                
            ]);
           
           
            return $school;
        });
        return $result;
       }else{
        return response()->json([
            'status' => 'unsubscribed',
            'data'=>$present
        ]);
       }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return School::find($id);
    }

    public function getLga()
    {
        return Lga::all();
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        return School::find($id);
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
        $school = School::find($id);
        $school->schools = $request->schools;
        $school->abbreviation = $request->abbreviation;
        $school->email = $request->email;
        $school->phone = $request->phone;
        $school->address = $request->address;
        $school->lga= $request->lga;
        $school->level = $request->level;
        $school->ownership = $request->ownership;
        $school->save();
        return response()->json([
            'status' => 'Updated'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $school = School::find($id);
        $school->delete();
        return response()->json([
            'status' => 'Removed'
        ]);
    }
    public function multiDrop(Request $request)
    {
        foreach ($request->data as $id) {
            $find = School::find($id);
            $find->delete();
        }
     
        return response()->json([
            'status'=>'Deleted'
        ]);
    }
}
