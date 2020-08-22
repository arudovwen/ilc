<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDraftAssessmentResultTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('draft_assessment_result', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('user_id')->unsigned();
            $table->bigInteger('school_id')->unsigned();
            $table->bigInteger('tutor_id')->unsigned();
            $table->string('level');
            $table->string('subject');
            $table->string('type')->nullable();
            $table->string('title');
            $table->string('total_score');
            $table->longText('record');
            $table->timestamps();



            $table->foreign('school_id')->references('id')->on('schools')->onDelete('cascade');
            $table->foreign('tutor_id')->references('id')->on('tutors')->onDelete('cascade');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('draft_assessment_result');
    }
}
