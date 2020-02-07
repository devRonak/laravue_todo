<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;

class toDoController extends Controller
{
    function index(Request $request){
        $data = [
            'todo' => $request->input('todo')
        ];
        DB::table('todo')->insert($data);
    }
}
