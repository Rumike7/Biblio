<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Models\User;
use App\Models\Rating;
use App\Models\Comment;

class Book extends Model
{
    use HasFactory;

    protected $fillable=[
        'filename',
        'domain',
        'faculty',
        'type',
        'file',
        'image',
        'user_id',
        'description',
        'accepted',
    ];

    public function author(){
        return $this->belongsTo(User::class,'user_id');
    }
    public function ratings(){
        return $this->hasMany(Rating::class);
    }
    public function comments(){
        return $this->hasMany(Comment::class);
    }

}
