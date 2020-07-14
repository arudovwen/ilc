<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddAddressDobDoeLgaStateBankNameBankNoBvnSglRankFileNoAreaOfSpecializationTutorIdToTutorsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('tutors', function (Blueprint $table) {
            $table->string('address')->nullable();
            $table->string('dob')->nullable();
            $table->string('doe')->nullable();
            $table->string('lga')->nullable();
            $table->string('state')->nullable();
            $table->string('bank_name')->nullable();
            $table->string('bank_no')->nullable();
            $table->string('bvn')->nullable();
            $table->string('sgl')->nullable();
            $table->string('rank')->nullable();
            $table->string('file_no')->nullable();
            $table->string('area_of_specialization')->nullable();
           
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('tutors', function (Blueprint $table) {
            //
        });
    }
}
