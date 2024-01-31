<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\str;

class Category extends Model
{
    use HasFactory;
    protected $fillable = [
        'title',
        'slug',
    ];

    protected static function boot()
    {
        parent::boot();

        static::saving(function ($category) {
            $category->slug = Str::slug($category->title);
        });
    }

    public function getRouteKeyName()
    {
        if(request()->route()->named('categories.show')) {
            return 'slug';
        }

        return 'id';
    }
}
