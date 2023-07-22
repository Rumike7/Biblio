<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Values extends Model
{
    use HasFactory;


    protected $casts=[
        'faculties'=>'array',
        'domains'=>'array',
        'types'=>'array',
    ];
    // default value
    protected $attributes=[
        'faculties'=>'[]',
        'domains'=>'[]',
        'types'=>'[]',
    ];
}
