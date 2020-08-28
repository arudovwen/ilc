<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAttendancesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('attendances', function (Blueprint $table) {
           
            $table->id();
            $table->integer('school_id');
            $table->integer('user_id')->nullable();
            $table->integer('tutor_id')->nullable();
            $table->string('record')->nullable();
            $table->string('subject')->nullable();
            $table->string('level')->nullable();
            $table->string('day');
            $table->integer('score')->nullable();
            $table->integer('participation_id');
            $table->integer('participation_score');
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
        Schema::dropIfExists('attendances');
    }
}
