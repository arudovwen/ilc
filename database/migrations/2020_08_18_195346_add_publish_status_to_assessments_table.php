<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddPublishStatusToAssessmentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('assessments', function (Blueprint $table) {
            $table->string('description')->nullable();
            $table->string('questions')->nullable();
            $table->string('feedback')->nullable();
            $table->string('deadline')->nullable();
            $table->boolean('publish_status')->default(false);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('assessments', function (Blueprint $table) {
            $table->dropColumn('publish_status');
            $table->dropColumn('questions');
            $table->dropColumn('feedback');
            $table->dropColumn('description');
            $table->dropColumn('deadline');

        });
    }
}
