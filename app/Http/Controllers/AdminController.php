<?php

namespace App\Http\Controllers;

use App\Admin;
use App\School;
use App\PasswordGenerator;
use Illuminate\Http\Request;
use App\Notifications\NewAdmin;
use Illuminate\Support\Facades\Hash;

class AdminController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $admin = auth('admin')->user();
        return Admin::where('school_id',$admin->school_id)->get();
    }
    public function adminDetail()
    {
        $admin = auth('admin')->user();
      
        $school = School::find($admin->school_id);
        $admin->verify = $school->verify;
        $admin->school = $school->schools;
        $admin->abbreviation = $school->abbreviation;
        return $admin;
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
        $password = new PasswordGenerator();
        $admin = Admin::create([
                  
                    'name'=> $request->name,
                    'email'=> $request->email,
                    'school_id'=> $request->school_id,
                    'address'=> $request->address,
                    'role'=> $request->role,
                    'password'=> Hash::make($password->random_strings(8)),
                    
                ]);
                $school = School::find($request->school_id);
                $admin->pass =  $password->random_strings(8);
                $admin->notify(new NewAdmin($school,$admin));
                return $admin;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Admin::find($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        return Admin::find($id);
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
        $admin = Admin::find($id);
        $admin->name = $request->name;
        $admin->school_id = $request->school_id;
        $admin->role = $request->role;
        $admin->phone = $request->phone;
        $admin->address = $request->address;
        $admin->password =  Hash::make($request->password);
        $admin->save();
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
        $admin = Admin::find($id);
        $admin->delete();
        return response()->json([
            'status' => 'Removed'
        ]);
    }
    public function multiDrop(Request $request)
    {
        foreach ($request->data as $id) {
            $find = Admin::find($id);
            $find->delete();
        }
     
        return response()->json([
            'status'=>'Deleted'
        ]);
    }
}
