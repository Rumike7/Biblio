<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateBookRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'filename' => 'required|string|max:255',
            'domain' => 'required|string|max:255',
            'faculty' => 'required|string|max:255',
            'type' => 'required|string|max:255',
            'file' => 'mimes:pdf,epub|max:10240', // Assuming maximum file size is 10MB
            'image' => 'image|mimes:jpeg,png,jpg,gif|max:2048', // Assuming maximum image size is 2MB
            'description' => 'required|string',
        ];
    }
}
