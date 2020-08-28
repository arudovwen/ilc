<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTutorAttendancesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tutor_attendances', function (Blueprint $table) {
            $table->id();
            $table->integer('school_id');
            $table->integer('tutor_id')->nullable();
            $table->longText('record')->nullable();
            $table->string('level')->nullable();
            $table->string('date');
            $table->string('day');
            $table->string('time');
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
        Schema::dropIfExists('tutor_attendances');
    }
}
