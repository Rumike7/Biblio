<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateBookAdminRequest extends FormRequest
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
            'domain' => 'string|max:255',
            'faculty' => 'string|max:255',
            'type' => 'string|max:255',
            'accepted' => 'integer',
            'description' => 'string|nullable',
        ];
    }
}
