<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddOverallToDraftAssessmentResult extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('draft_assessment_result', function (Blueprint $table) {
            $table->integer('overall')->default(0);
            $table->string('status')->default('pending');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('draft_assessment_result', function (Blueprint $table) {
            $table->dropColumn('overall');
            $table->dropColumn('status');
        });
    }
}
