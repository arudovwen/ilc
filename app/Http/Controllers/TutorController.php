<?php

namespace App\Http\Controllers;

use App\Tutor;
use App\School;
use App\PasswordGenerator;
use Illuminate\Http\Request;
use App\Notifications\NewTutor;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class TutorController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $school_id = auth('admin')->user()->school_id;
        return Tutor::where('school_id', $school_id)->get();
    }

  
    public function tutorDetail()
    {
         $tutor = auth('tutor')->user();
         $tutor->abbreviation = School::where('id', $tutor->school_id)->value('abbreviation');
                return $tutor;
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
        $value = DB::transaction(function () use ($request) {
          
            $school_id = auth('admin')->user()->school_id;
            $school_name = School::find($school_id)->schools;
            $school = School::find($school_id);
            $password = new PasswordGenerator();
            $tutor = Tutor::create([
            'name' => $request['name'],
            'email' => $request['email'],
            'password' => Hash::make($password->random_strings(8)),
            'id_no' => rand(0, 99999),
            'phone' => $request['phone'],
            'gender' => $request['gender'],
            'school' => $school_name,
            'school_id' => $school_id,
            'subjects' => $request['subjects'],
            'address'  => $request['address'],
             'dob'  => $request['dob'],
             'doe'  => $request['doe'],
              'lga'  => $request['lga'],
              'state'  => $request['state'],
              'bank_name'  => $request['bank_name'],
              'bank_no'  => $request['bank_no'],
              'bvn'  => $request['bvn'],
              'cgl'  => $request['cgl'],
              'rank'  => $request['rank'],
              'file_no'  => $request['file_no'],
              'area_of_specialization'  => $request['area_of_specialization'],
           
            
        
        ]);
            $tutor->pass = $password->random_strings(8);
            $tutor->notify(new NewTutor($school, $tutor));
            return $tutor;
        });
        return $value;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Tutor::find($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        return Tutor::find($id);
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
        $tutor = Tutor::find($id);
        $tutor['name'] = $request['name'];
        $tutor['email'] = $request['email'];
        $tutor['password'] = Hash::make($request['password']);
        $tutor['phone'] = $request['phone'];
        $tutor['gender'] = $request['gender'];
        $tutor['level_of_edu'] = $request['level_of_edu'];
        $tutor['faculty'] = $request['faculty'];
        $tutor['department'] = $request['department'];
        $tutor['course_level']= $request['course_level'];
        $tutor['subjects'] =  $request['subjects'];
        $tutor['address' ] = $request['address'];
        $tutor['dob']  = $request['dob'];
        $tutor['profile']  = $request['profile'];
        $tutor['doe' ] = $request['doe'];
        $tutor['lga']  = $request['lga'];
        $tutor['state']  = $request['state'];
        $tutor['bank_name']  = $request['bank_name'];
        $tutor['bank_no']  = $request['bank_no'];
        $tutor['bvn']  = $request['bvn'];
        $tutor['cgl']  = $request['cgl'];
        $tutor['rank']  = $request['rank'];
        $tutor['file_no']  = $request['file_no'];
        $tutor['area_of_specialization']  = $request['area_of_specialization'];
     
        $tutor->save();
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
        $tutor = Tutor::find($id);
        $tutor->delete();
        return response()->json([
            'status' => 'Removed'
        ]);
    }
}
