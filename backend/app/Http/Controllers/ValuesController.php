<?php

namespace App\Http\Controllers;

use App\Models\Values;
use Illuminate\Http\Request;
const FACULTIES=0;
const DOMAINS=1;
const TYPES=2;
class ValuesController extends Controller
{
    public function show($values)
    {
        $values=Values::find($values);
        return $values;
    }

    public function update(Request $request, $type)
    {
        $values=Values::find(1);
        if($type==FACULTIES){
            $values->faculties=$request['dataarray'];
        }
        if($type==DOMAINS){
            $values->domains=$request['dataarray'];
        }
        if($type==TYPES){
            $values->types=$request['dataarray'];
        }
        $values->save();
        return $values;
    }
}
