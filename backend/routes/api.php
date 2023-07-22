<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\BookController;
use App\Http\Controllers\BookAdminController;
use App\Http\Controllers\SearchController;
use App\Http\Controllers\ValuesController;
use Illuminate\Support\Facades\Storage;
use App\Models\Rating;
use App\Models\Comment;
use App\Models\ReplyTo;

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





Route::post('/books/rate',function(Request $request){
    $rating = Rating::updateOrCreate(
        ['user_id' => $request->user_id,'book_id' => $request->book_id],
        ['user_id' => $request->user_id,'book_id' => $request->book_id,'like' => $request->like,'rating' => $request->rating]
    );
    return $rating;
});
Route::post('/books/myrate',function(Request $request){
    $rating = Rating::where("user_id",$request->user_id)->where("book_id",$request->book_id)->first();
    return $rating;
});
Route::post('/books/comment',function(Request $request){
    $comment = Comment::updateOrCreate(
        ['id' => $request->id],
        ['user_id' => $request->user_id,'book_id' => $request->book_id,'text' => $request->text]
    );
    if($request->parentId>0)
        $replyTo = ReplyTo::updateOrCreate(
            ['id' => $request->id],
            ['response_id' => $comment->id,'comment_id' => $request->parentId]
        );
    return $comment;
});

Route::apiResource('/values',ValuesController::class);
Route::apiResource('/books',BookController::class);
Route::apiResource('/admin/books',BookAdminController::class);
Route::get('/public/{type}/{folder}/{filename}', function ($type,$folder,$filename) {
    $path = 'public/'.$type.'/'.$folder.'/' . $filename;
    if (Storage::exists($path)) {
        $file = Storage::get($path);
        $type = Storage::mimeType($path);
        $response = response($file, 200)->header('Content-Type', $type);
        return $response;
    }
    abort(404);
})->name('image');
