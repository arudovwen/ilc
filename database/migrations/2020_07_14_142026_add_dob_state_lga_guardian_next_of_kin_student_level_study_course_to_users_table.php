<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddDobStateLgaGuardianNextOfKinStudentlevelStudyCourseToUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string('dob')->nullable();
            $table->string('state')->nullable();
            $table->string('lga')->nullable();
            $table->string('guardian')->nullable();
            $table->string('next_of_kin')->nullable();
            $table->string('guardian_phone')->nullable();
            $table->string('next_of_kin_phone')->nullable();
            $table->string('student_level')->nullable();
            $table->string('study_course')->nullable();
            
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn('dob');
            $table->dropColumn('state');
            $table->dropColumn('lga');
            $table->dropColumn('guardian');
            $table->dropColumn('next_of_kin');
            $table->dropColumn('guardian_phone');
            $table->dropColumn('next_of_kin_phone');
            $table->dropColumn('student_level');
            $table->dropColumn('study_course');
        });
    }
}
