<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('reply_tos', function (Blueprint $table) {
            $table->id();
            $table->integer('comment_id')->unsigned()->index();
            $table->integer('response_id')->unsigned()->index();
            $table->timestamps();
            
            $table->foreign('comment_id')->references('id')->on('comments')->onDelete('cascade');
            $table->foreign('response_id')->references('id')->on('comments')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('reply_tos');
    }
};
