<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\FileController;
use App\Http\Controllers\SearchController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the 'api' middleware group. Enjoy building your API!
|
*/



// Route::apiResource('users', UserController::class);

//Authentication routes
Route::prefix('auth')->controller(AuthController::class)->group(function(){
    Route::post('/login', 'login');
    Route::post('/register', 'register');
    Route::get('/logout', 'logout')->middleware('auth:sanctum');
    Route::post('/confirm-password', 'confirmPassword')->middleware('auth:sanctum');
    Route::post('/reset-password', 'resetPassword')->middleware('auth:sanctum');
    Route::post('/verify-email', 'verifyEmail')->middleware('auth:sanctum');
});

//Tokens
Route::post('/tokens/create/{token_name}', function (Request $request) {
    $token = $request->user()->createToken("token_name");
 
    return ['token' => $token->plainTextToken];
});
// $token = $request->bearerToken();

// foreach ($user->tokens as $token) {
//     //
// }

// Search
// Route::post('/search', function (Request $request) {
//     if ($request->keysearch) {
//         SearchController::searchByKeyWord($request);
//     }
//     else{
//         SearchController::searchByCategory($request);
//     }
//     $query = $request->query('query');
// })->middleware('auth:sanctum');

//File
Route::prefix('file')->controller(FileController::class)->group(function(){
    Route::post('/upload', 'store')->middleware('auth:sanctum');
    Route::post('/uploading', 'upload');
});

// Admin   
Route::prefix('admin')->controller(AdminController::class)->group(function(){
    Route::get('/unverifiedBooks', 'unverifiedBooks');
    Route::get('/verifiedBooks', 'verifiedBooks');
    Route::post('/accept', 'accept');
    Route::post('/reject', 'reject');
    Route::post('/accept', 'accept');
});