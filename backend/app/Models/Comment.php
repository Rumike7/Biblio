<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Models\ReplyTo;
use App\Models\User;

class Comment extends Model
{
    use HasFactory;

    protected $fillable=[
        'text',
        'user_id',
        'book_id',
    ];

    public function replyTos(){
        return $this->hasMany(ReplyTo::class);
    }
    public function author(){
        return $this->belongsTo(User::class,'user_id');
    }
}
