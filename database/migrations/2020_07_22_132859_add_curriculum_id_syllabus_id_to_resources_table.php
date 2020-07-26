<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddCurriculumIdSyllabusIdToResourcesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('resources', function (Blueprint $table) {
            $table->bigInteger('curriculum_id')->unsigned();
            $table->bigInteger('syllabus_id')->unsigned();
            $table->string('cover_image')->nullable();
            $table->foreign('curriculum_id')->references('id')->on('curriculums')->onDelete('cascade');
            $table->foreign('syllabus_id')->references('id')->on('syllabuses')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('resources', function (Blueprint $table) {
            $table->dropColumn('curriculum_id');
            $table->dropColumn('syllabus_id');
            $table->dropColumn('cover_image');
        });
    }
}
