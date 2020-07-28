<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateResourcesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('resources', function (Blueprint $table) {
        
            $table->id();
            $table->bigInteger('school_id')->unsigned();
            $table->bigInteger('tutor_id')->unsigned();
            $table->string('level');
            $table->string('subject');
            $table->string('module');
            $table->longText('excerpt')->nullable();
            $table->longText('content');
            $table->string('worksheet');
            $table->string('worksheet_id')->nullable();
            $table->string('note');

            $table->timestamps();

            $table->foreign('school_id')->references('id')->on('schools')->onDelete('cascade');
            $table->foreign('tutor_id')->references('id')->on('tutors')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('resources');
    }
}
