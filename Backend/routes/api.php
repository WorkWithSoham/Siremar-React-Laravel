<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
 */

Route::post('messages', [\App\Http\Controllers\ChatController::class, 'message']);
Route::post('getlist', [\App\Http\Controllers\getList::class, 'gList']);
