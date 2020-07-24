<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddAddressDobDoeLgaStateBankNameBankNoBvncglRankFileNoAreaOfSpecializationTutorIdToTutorsTable extends Migration
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
            $table->string('cgl')->nullable();
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
            $table->dropColumn('address');
            $table->dropColumn('dob');
            $table->dropColumn('doe');
            $table->dropColumn('lga');
            $table->dropColumn('state');
            $table->dropColumn('bank_name');
            $table->dropColumn('bank_no');
            $table->dropColumn('bvn');
            $table->dropColumn('rank');
            $table->dropColumn('file_no');
            $table->dropColumn('area_of_specialization');
        });
    }
}
