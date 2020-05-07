<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddCourseLevelDepartmentFacultyGenderLevelOfEduMatNoPhoneSchoolToUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string('course_level')->nullable();
            $table->string('department')->nullable();
            $table->string('faculty')->nullable();
            $table->string('gender')->nullable();
            $table->string('level_of_edu')->nullable();
            $table->string('mat_no')->nullable();
            $table->string('phone')->nullable();
            $table->string('school')->nullable();
            $table->string('profile')->nullable();
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
            //
        });
    }
}
