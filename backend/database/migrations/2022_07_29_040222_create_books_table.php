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
        Schema::create('books', function (Blueprint $table) {
            $table->id();
            $table->string('filename')->default('');
            $table->integer('accepted')->default(0);// 0 undefined;1 accepted,-1 refused
            $table->string('domain');
            $table->string('faculty');
            $table->string('type');
            $table->string('file');
            $table->string('image')->default('');
            $table->integer('liked')->default(0);
            $table->integer('disliked')->default(0);
            $table->integer('comented')->default(0);
            $table->integer('rated')->default(0);
            $table->text('description')->default('');
            $table->integer('user_id')->unsigned()->index();
            $table->timestamps();
            
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
        Schema::dropIfExists('books');
    }
};
