<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreProductRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'product_type'     => 'required|in:Unlisted,Cat,Accessory,Food,Furniture',
            'display_name'     => 'required|string|max:255',
            'description'      => 'required|string',
            'pricing'          => 'required|numeric|min:0',
            'discount_pricing' => 'nullable|numeric|min:0|lt:pricing',
            'stock'            => 'required|integer|min:0',
        ];
    }
}
