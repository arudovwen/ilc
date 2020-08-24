<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddParticipationAttendanceToGradeBooksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('grade_books', function (Blueprint $table) {
            $table->string('participation')->default(0);
            $table->string('attendance')->default(0);
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
            $table->dropColumn('participation');
            $table->dropColumn('attendance');
        });
    }
}
