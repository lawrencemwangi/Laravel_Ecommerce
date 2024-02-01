<?php

use Illuminate\Http\Request;
use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CategoryController;


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::group([], function(){
    Route::apiResource('categories', CategoryController::class);
});

Route::post('/register',[AuthController::class, 'register']);
Route::post('/login',[AuthController::class,'login']);

Route::middleware('auth:sanctum')->post('/logout',[AuthController::class,'logout']);
