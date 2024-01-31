<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use App\Http\Requests\StoreCategoryRequest;

class CategoryController extends Controller
{
    public function index()
    {
        $categories = Category::latest()->get();
        return response()->json($categories);
    }
    
    public function store(StoreCategoryRequest $request)
    {
       Category::create($request->validated());
       return response()->json("Category added.");
    }

    public function show(Category $category)
    {
        return $category;
    }
 
    
    public function update(StoreCategoryRequest $request, Category $category)
    {
        $category->update($request->validated());
        return response()->json("category has been updated");
    }

    public function destroy(Category $category)
    {
        $category->delete();
        return response()->json("Category delete successfully");
    }
}
