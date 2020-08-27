<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddAverageToGradeBooksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('grade_books', function (Blueprint $table) {
          
            $table->integer('average_quiz')->default(0);
            $table->integer('average_test')->default(0);
            $table->integer('average_assignment')->default(0);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('grade_books', function (Blueprint $table) {
            $table->dropColumn('average_quiz');
            $table->dropColumn('average_test');
            $table->dropColumn('average_assignment');
        });
    }
}
