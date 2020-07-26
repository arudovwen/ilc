<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAssessmentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('assessments', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('school_id')->unsigned();
            $table->bigInteger('tutor_id')->unsigned();
            $table->string('subject');
            $table->string('title');
            $table->string('type');
            $table->string('duration');
            $table->longText('assessment');
            $table->string('session');
            $table->string('status');
            $table->string('level');
            $table->string('start')->nullable();
            $table->string('end')->nullable();

            $table->foreign('school_id')->references('id')->on('schools')->onDelete('cascade');
            $table->foreign('tutor_id')->references('id')->on('tutors')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('assessments');
    }
}
