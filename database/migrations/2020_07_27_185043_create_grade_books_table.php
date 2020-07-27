<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGradeBooksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('grade_books', function (Blueprint $table) {
            $table->id();
              $table->bigInteger('user_id')->unsigned();
              $table->bigInteger('school_id')->unsigned();
              $table->string('level');
              $table->string('subject');
              $table->string('type');
              $table->string('title');
              $table->longText('record');
            $table->timestamps();


            $table->foreign('school_id')->references('id')->on('schools')->onDelete('cascade');
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
        Schema::dropIfExists('grade_books');
    }
}
