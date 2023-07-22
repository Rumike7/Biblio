<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Models\Comment;

class ReplyTo extends Model
{
    use HasFactory;

    protected $fillable=[
        'comment_id',
        'response_id',
    ];


    public function comment()
    {
        return $this->belongsTo(Comment::class, 'response_id');
    }

    public function replyTos()
    {
        return $this->hasMany(ReplyTo::class, 'response_id');
    }
}
