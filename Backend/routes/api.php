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
Route::post('insertbusiness', [\App\Http\Controllers\insertBusiness::class, 'iBusiness']);
Route::post('updatebusiness', [\App\Http\Controllers\updateBusiness::class, 'uBusiness']);
Route::post('delete', [\App\Http\Controllers\delete::class, 'delete']);
Route::post('updatecounty', [\App\Http\Controllers\updateCounty::class, 'uCounty']);
Route::post('updatediscounts', [\App\Http\Controllers\updateDiscounts::class, 'uDiscounts']);
Route::post('updateevents', [\App\Http\Controllers\updateEvents::class, 'uEvents']);
Route::post('updateflights', [\App\Http\Controllers\updateFlights::class, 'uFlights']);
Route::post('updatehospital', [\App\Http\Controllers\updateHospital::class, 'uHospital']);
Route::post('updatemoveout', [\App\Http\Controllers\updateMoveOut::class, 'uMoveOut']);
Route::post('updateSchool', [\App\Http\Controllers\updateSchool::class, 'uSchool']);
Route::post('updateUsers', [\App\Http\Controllers\updateUsers::class, 'uUsers']);